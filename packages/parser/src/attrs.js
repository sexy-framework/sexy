// events - @ -> id(attrs value)
// expression : id(attrs)
// stringlitteral 
import { makeMap } from './utils';


var isAttr = makeMap(
	'accept,accept-charset,accesskey,action,align,alt,async,autocomplete,' +
	'autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,' +
	'checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,' +
	'name,contenteditable,contextmenu,controls,coords,data,datetime,default,' +
	'defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,' +
	'form,formaction,headers,height,hidden,high,href,hreflang,http-equiv,' +
	'icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,' +
	'manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,' +
	'muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,' +
	'preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,' +
	'scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,' +
	'spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,' +
	'target,title,type,usemap,value,width,wrap'
);


function makeValue(value, isExpression = false)
{
	return {
		value,
		isExpression,
	}
}

export function attrs(obj)
{
	let events = {};
	let props = {};
	let attributes = {};
	let staticAttrs = {};

	for(let name in obj)
	{
		let value = obj[name];

		if(isAttr(name)) {
			staticAttrs[name] = value;
		} else if(name.match(/^@/g)) {
			events[name] = makeValue(value, true);
		} else if(name.match(/^\:/g)) {
			name = name.replace(/^\:/g, '');
			if(isAttr(name)) {
				attributes[name] = makeValue(value, true);
			} else {
				props[name] = makeValue(value, true);
			}
		} else {
			props[name] = makeValue(value);
			// console.error(`Attr ${name} doesnt registered. Cant understand type.`)
		}
	}

	return {
		staticAttrs: staticAttrs,
		events,
		props,
		attributes,
	};
}