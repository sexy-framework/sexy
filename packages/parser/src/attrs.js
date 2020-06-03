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

var isDomAttr = (name, isComponent) => {
	return (!isComponent && isAttr(name) && !isRootAttr(name)) || name.match(/^data\-/g);
}

var isRootAttr = makeMap(
	'key,ref'
);

function makeValue(value, isExpression = false)
{
	return {
		value,
		isExpression,
	}
}

function parseName(name)
{
	let options = {};

	let parts = name.split('.');
	for (var i = 0; i < parts.length; i++) {
		if(i === 0) {
			name = parts[i]
		} else {
			options[parts[i]] = true;
		}
	}

	return {
		name,
		options,
	}
}


export function attrs(obj, isComponent = false)
{
	let result = {
		events: {},
		props: {},
		attributes: {},
		staticAttrs: {},
		directives: {},
	}

	for(let prop in obj)
	{
		let value = obj[prop];
		let { name, options } = parseName(prop);

		if(isDomAttr(name, isComponent)) {
			result.staticAttrs[name] = value;
		} else if(name.match(/^\$/g)) {
			name = name.replace(/^\$/g, '');
			result.directives[name] = {
				options,
				value: makeValue(value, true),
				rawValue: value,
			}
		} if(name.match(/^@/g)) {
			name = name.replace(/^@/g, '');
			result.events[name] = makeValue(value, true);
		} else if(name.match(/^\:/g)) {
			name = name.replace(/^\:/g, '');
			value = makeValue(value, true);
			
			if(isRootAttr(name)) {
				result[name] = value;
			} else if(isDomAttr(name, isComponent)) {
				result.attributes[name] = value;
			} else {
				result.props[name] = value;
			}
		} else {
			if(isRootAttr(name)) {
				result[name] = value;
			} else {
				result.props[name] = makeValue(value);
			}
			// console.error(`Attr ${name} doesnt registered. Cant understand type.`)
		}
	}

	return result;
}