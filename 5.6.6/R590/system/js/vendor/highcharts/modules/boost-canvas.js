/*
 Highcharts JS v7.0.3 (2019-02-06)
 Boost module

 (c) 2010-2019 Highsoft AS
 Author: Torstein Honsi

 License: www.highcharts.com/license
*/
(function(k){"object"===typeof module&&module.exports?(k["default"]=k,module.exports=k):"function"===typeof define&&define.amd?define(function(){return k}):k("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(k){(function(b){var k=b.win.document,ba=function(){},ca=b.Color,w=b.Series,f=b.seriesTypes,q=b.extend,x=b.addEvent,da=b.fireEvent,ea=b.isNumber,fa=b.merge,ga=b.pick,y=b.wrap,I;b.initCanvasBoost=function(){b.seriesTypes.heatmap&&b.wrap(b.seriesTypes.heatmap.prototype,"drawPoints",function(){var a=
this.chart,c=this.getContext(),g=this.chart.inverted,m=this.xAxis,d=this.yAxis;c?(this.points.forEach(function(b){var e=b.plotY;void 0===e||isNaN(e)||null===b.y||(e=b.shapeArgs,b=a.styledMode?b.series.colorAttribs(b):b.series.pointAttribs(b),c.fillStyle=b.fill,g?c.fillRect(d.len-e.y+m.left,m.len-e.x+d.top,-e.height,-e.width):c.fillRect(e.x+m.left,e.y+d.top,e.width,e.height))}),this.canvasToSVG()):this.chart.showLoading("Your browser doesn't support HTML5 canvas, \x3cbr\x3eplease use a modern browser")});
b.extend(w.prototype,{getContext:function(){var a=this.chart,c=a.chartWidth,g=a.chartHeight,b=a.seriesGroup||this.group,d=this,f,e=function(a,d,g,c,b,e,m){a.call(this,g,d,c,b,e,m)};a.isChartSeriesBoosting()&&(d=a,b=a.seriesGroup);f=d.ctx;d.canvas||(d.canvas=k.createElement("canvas"),d.renderTarget=a.renderer.image("",0,0,c,g).addClass("highcharts-boost-canvas").add(b),d.ctx=f=d.canvas.getContext("2d"),a.inverted&&["moveTo","lineTo","rect","arc"].forEach(function(a){y(f,a,e)}),d.boostCopy=function(){d.renderTarget.attr({href:d.canvas.toDataURL("image/png")})},
d.boostClear=function(){f.clearRect(0,0,d.canvas.width,d.canvas.height);d===this&&d.renderTarget.attr({href:""})},d.boostClipRect=a.renderer.clipRect(),d.renderTarget.clip(d.boostClipRect));d.canvas.width!==c&&(d.canvas.width=c);d.canvas.height!==g&&(d.canvas.height=g);d.renderTarget.attr({x:0,y:0,width:c,height:g,style:"pointer-events: none",href:""});d.boostClipRect.attr(a.getBoostClipRect(d));return f},canvasToSVG:function(){this.chart.isChartSeriesBoosting()?this.boostClear&&this.boostClear():
(this.boostCopy||this.chart.boostCopy)&&(this.boostCopy||this.chart.boostCopy)()},cvsLineTo:function(a,c,g){a.lineTo(c,g)},renderCanvas:function(){var a=this,c=a.options,g=a.chart,m=this.xAxis,d=this.yAxis,f=(g.options.boost||{}).timeRendering||!1,e,k=0,J=a.processedXData,w=a.processedYData,K=c.data,l=m.getExtremes(),z=l.min,A=l.max,l=d.getExtremes(),y=l.min,ha=l.max,L={},B,ia=!!a.sampling,M,C=c.marker&&c.marker.radius,N=this.cvsDrawPoint,D=c.lineWidth?this.cvsLineTo:!1,O=C&&1>=C?this.cvsMarkerSquare:
this.cvsMarkerCircle,ja=this.cvsStrokeBatch||1E3,ka=!1!==c.enableMouseTracking,P,l=c.threshold,p=d.getThreshold(l),Q=ea(l),R=p,la=this.fill,S=a.pointArrayMap&&"low,high"===a.pointArrayMap.join(","),T=!!c.stacking,U=a.cropStart||0,l=g.options.loading,ma=a.requireSorting,V,na=c.connectNulls,W=!J,E,F,r,v,G,n=T?a.data:J||K,oa=a.fillOpacity?(new ca(a.color)).setOpacity(ga(c.fillOpacity,.75)).get():a.color,X=function(){la?(e.fillStyle=oa,e.fill()):(e.strokeStyle=a.color,e.lineWidth=c.lineWidth,e.stroke())},
Z=function(d,c,b,h){0===k&&(e.beginPath(),D&&(e.lineJoin="round"));g.scroller&&"highcharts-navigator-series"===a.options.className?(c+=g.scroller.top,b&&(b+=g.scroller.top)):c+=g.plotTop;d+=g.plotLeft;V?e.moveTo(d,c):N?N(e,d,c,b,P):D?D(e,d,c):O&&O.call(a,e,d,c,C,h);k+=1;k===ja&&(X(),k=0);P={clientX:d,plotY:c,yBottom:b}},pa="x"===c.findNearestPointBy,aa=this.xData||this.options.xData||this.processedXData||!1,H=function(a,c,b){G=pa?a:a+","+c;ka&&!L[G]&&(L[G]=!0,g.inverted&&(a=m.len-a,c=d.len-c),M.push({x:aa?
aa[U+b]:!1,clientX:a,plotX:a,plotY:c,i:U+b}))};this.renderTarget&&this.renderTarget.attr({href:""});(this.points||this.graph)&&this.destroyGraphics();a.plotGroup("group","series",a.visible?"visible":"hidden",c.zIndex,g.seriesGroup);a.markerGroup=a.group;x(a,"destroy",function(){a.markerGroup=null});M=this.points=[];e=this.getContext();a.buildKDTree=ba;this.boostClear&&this.boostClear();this.visible&&(99999<K.length&&(g.options.loading=fa(l,{labelStyle:{backgroundColor:b.color("#ffffff").setOpacity(.75).get(),
padding:"1em",borderRadius:"0.5em"},style:{backgroundColor:"none",opacity:1}}),b.clearTimeout(I),g.showLoading("Drawing..."),g.options.loading=l),f&&console.time("canvas rendering"),b.eachAsync(n,function(c,b){var e,h,f,k=!1,l=!1,t=!1,u=!1,Y="undefined"===typeof g.index,q=!0;if(!Y){W?(e=c[0],h=c[1],n[b+1]&&(t=n[b+1][0]),n[b-1]&&(u=n[b-1][0])):(e=c,h=w[b],n[b+1]&&(t=n[b+1]),n[b-1]&&(u=n[b-1]));t&&t>=z&&t<=A&&(k=!0);u&&u>=z&&u<=A&&(l=!0);S?(W&&(h=c.slice(1,3)),f=h[0],h=h[1]):T&&(e=c.x,h=c.stackY,f=
h-c.y);c=null===h;ma||(q=h>=y&&h<=ha);if(!c&&(e>=z&&e<=A&&q||k||l))if(e=Math.round(m.toPixels(e,!0)),ia){if(void 0===r||e===B){S||(f=h);if(void 0===v||h>F)F=h,v=b;if(void 0===r||f<E)E=f,r=b}e!==B&&(void 0!==r&&(h=d.toPixels(F,!0),p=d.toPixels(E,!0),Z(e,Q?Math.min(h,R):h,Q?Math.max(p,R):p,b),H(e,h,v),p!==h&&H(e,p,r)),r=v=void 0,B=e)}else h=Math.round(d.toPixels(h,!0)),Z(e,h,p,b),H(e,h,b);V=c&&!na;0===b%5E4&&(a.boostCopy||a.chart.boostCopy)&&(a.boostCopy||a.chart.boostCopy)()}return!Y},function(){var c=
g.loadingDiv,b=g.loadingShown;X();a.canvasToSVG();f&&console.timeEnd("canvas rendering");da(a,"renderedCanvas");b&&(q(c.style,{transition:"opacity 250ms",opacity:0}),g.loadingShown=!1,I=setTimeout(function(){c.parentNode&&c.parentNode.removeChild(c);g.loadingDiv=g.loadingSpan=null},250));delete a.buildKDTree;a.buildKDTree()},g.renderer.forExport?Number.MAX_VALUE:void 0))}});f.scatter.prototype.cvsMarkerCircle=function(a,c,b,f){a.moveTo(c,b);a.arc(c,b,f,0,2*Math.PI,!1)};f.scatter.prototype.cvsMarkerSquare=
function(a,c,b,f){a.rect(c-f,b-f,2*f,2*f)};f.scatter.prototype.fill=!0;f.bubble&&(f.bubble.prototype.cvsMarkerCircle=function(a,c,b,f,d){a.moveTo(c,b);a.arc(c,b,this.radii&&this.radii[d],0,2*Math.PI,!1)},f.bubble.prototype.cvsStrokeBatch=1);q(f.area.prototype,{cvsDrawPoint:function(a,b,g,f,d){d&&b!==d.clientX&&(a.moveTo(d.clientX,d.yBottom),a.lineTo(d.clientX,d.plotY),a.lineTo(b,g),a.lineTo(b,f))},fill:!0,fillOpacity:!0,sampling:!0});q(f.column.prototype,{cvsDrawPoint:function(a,b,g,f){a.rect(b-1,
g,1,f-g)},fill:!0,sampling:!0});b.Chart.prototype.callbacks.push(function(a){x(a,"predraw",function(){a.renderTarget&&a.renderTarget.attr({href:""});a.canvas&&a.canvas.getContext("2d").clearRect(0,0,a.canvas.width,a.canvas.height)});x(a,"render",function(){a.boostCopy&&a.boostCopy()})})}})(k)});
//# sourceMappingURL=boost-canvas.js.map
