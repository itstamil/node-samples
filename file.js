var fs = require("fs")
var file_content=''
var json_handle = require('edit-json-file')
var data_file = json_handle("data.json")
//fs.readFile(file_name,encoding,callback)

// sample file write
fs.readFile("sample.txt",'utf8',function(err,data){
	file_content = data
	if(!err){
		// fs.writeFile(file_path, content, callback)
		fs.writeFile("copy.txt",file_content,function(err){
			if(!err){
				console.log("file copied")
			}
		})
	}
})


//filewrite in loops

var mark_data = data_file.get("mark");
var data_len = mark_data.length
var name = "test_doc"
	for(var i=0; i<data_len; i++){
		var conten_string = "Tamil :"+mark_data[i].tamil+"\r\nEnglish :"+mark_data[i].english
		var file = name+i+".txt"
		var total = mark_data[i].tamil + mark_data[i].english
		fs.writeFile(file,conten_string,function(err){
			if(!err){
				console.log("data write done",total)
			}
		})
		console.log(mark_data[i].tamil)
	}


