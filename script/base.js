function mto(user,text,subject,css_class) {
			var host=new Array();
			host[0]="digitaliasistemi";
			host[1]="it";
			e = user + "@";
			for (i = 0; i < host.length - 1; i++) { e = e + host[i] + "."; }
			e = e + host[host.length - 1] ;
			var link="<a ";
			if (css_class!=null) link=link+"class=\""+css_class+"\" ";
			link = link+"href=\"mailto:"+e;
			if  (subject!=null) link=link + "?subject="+subject;
			link = link+"\">";
			if (text==null) text=e;
			document.writeln(link + text + "</a>");
}
