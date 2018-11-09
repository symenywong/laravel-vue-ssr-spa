const fs=require('fs');
const path=require('path');

let fileObj={
  admin:{
    publicDir:'admin',
    resource_path:'admin/index'
  },
  mobile:{
    publicDir:'mobile',
    resource_path:'mobile/index'
  },
  // index:{
  //   publicDir:'index',
  //   resource_path:'index/index'
  // }
}


let argvs=process.argv;
if(argvs[argvs.length-1]=="--env=dev"){
  for(let key in fileObj){
    copyFile(fileObj[key],'dev');
  }
}else{
  for(let key in fileObj){
    copyFile(fileObj[key],'build');
  }
}
function copyFile(params,type){
  let to_static_path=path.join(__dirname,`resources/views/${params.resource_path}_static.blade.php`);//读取文件
  let to_path=path.join(__dirname,`resources/views/${params.resource_path}.blade.php`);//写入文件
  let _dir=path.join(__dirname,`public/${params.publicDir}/js`);//编译包路径

  //写入 app.js 工程入口
  let origin_template=fs.readFileSync(to_static_path);
  let appScript='';
  if(type=='dev'){
    appScript=`<script type="text/javascript" src="{{ asset('${params.publicDir}/js/app.js') }}"></script>`
  }else{
    let appPath=getapp(_dir);
    let scriptPath=path.join(`/${params.publicDir}/js`,appPath);
    appScript=`<script type="text/javascript" src="${scriptPath}"></script>`;
  }
  let new_template=rewriteHtml(origin_template.toString(),appScript);
  fs.writeFileSync(to_path,new_template,function(err){
    if(err){
      return console.error(`***************写入${params.publicDir}失败!************`);
    }
    console.log(`***************写入${params.publicDir}成功!************`);
  })
}

function getapp(dir){
  let allFiles=fs.readdirSync(dir);
  let appPath='';
  for(let i=0;i<allFiles.length;i++){
    if(isExitApp(allFiles[i])){
      appPath=allFiles[i];
      break;
    };
  }
  return appPath ;
}
function isExitApp(path){
  var reg=new RegExp(/app\.(\w)*\.js(?!\.gz)/);
  let res=reg.test(path);
  return res;
}
function rewriteHtml(_html,appScript){
  //读取文件内容, 在页面 body 尾部加入 script 标签
  let reg=new RegExp(/\<\/html\>/,'ig');
  let str=_html.replace(reg,`\n ${appScript} \n</html>`);
  return str;
}
