!function(r){function n(t){if(e[t])return e[t].exports;var o=e[t]={exports:{},id:t,loaded:!1};return r[t].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=r,n.c=e,n.p="",n(0)}([function(r,n,e){"use strict";var t=e(1),o=[1,2,-3,4,5],u=2,c=function(r,n,e){return console.log("ForEach "+n+": "+r)},i=function(r,n,e){return r*r},f=function(r,n,e){return r>3},l=function(r,n,e){return r>0},a=function(r,n,e){return r>0},s=function(r,n,e,t){return r+n};(0,t.forEach)(o,c),console.log("Map: ",(0,t.map)(o,i)),console.log("Filter: ",(0,t.filter)(o,f)),console.log("Some: ",(0,t.some)(o,l)),console.log("Every: ",(0,t.every)(o,a)),console.log("Reduce (without initial):",(0,t.reduce)(o,s)),console.log("Reduce (initial = "+u+"):",(0,t.reduce)(o,s,u))},function(r,n){"use strict";function e(r){if(Array.isArray(r)){for(var n=0,e=Array(r.length);n<r.length;n++)e[n]=r[n];return e}return Array.from(r)}Object.defineProperty(n,"__esModule",{value:!0});var t=n.forEach=function(r,n){for(var e=0;e<r.length;e++)n(r[e],e,r)},o=(n.map=function(r,n){var e=[];return t(r,function(r,t,o){return e.push(n(r,t,o))}),e},n.filter=function(r,n){var e=[];return t(r,function(r,t,o){n(r,t,o)&&e.push(r)}),e},n.some=function(r,n){for(var e=0;e<r.length;e++)if(n(r[e],e,r))return!0;return!1});n.every=function(r,n){return!o(r,function(r,e,t){return!n(t[e],e,t)})},n.reduce=function(r,n,o){var u=[].concat(e(r)),c=void 0==o?u.shift():o;return t(u,function(r,e,t){return c=n(c,t[e],e,t)}),c}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc2NyaXB0LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0YTQzYjNhNzAxZDQzMDcwN2ViYSIsIndlYnBhY2s6Ly8vLi9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vbWV0aG9kcy5qcyJdLCJuYW1lcyI6WyJtb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiaW5zdGFsbGVkTW9kdWxlcyIsImV4cG9ydHMiLCJtb2R1bGUiLCJpZCIsImxvYWRlZCIsImNhbGwiLCJtIiwiYyIsInAiLCJfbWV0aG9kcyIsImFyciIsIlJFRFVDRV9JTklUSUFMX1ZBTFVFIiwiZm9yRWFjaEZuIiwiaXRlbSIsImluZGV4IiwiY29uc29sZSIsImxvZyIsIm1hcEZuIiwiZmlsdGVyRm4iLCJzb21lRm4iLCJldmVyeUZuIiwicmVkdWNlRm4iLCJwcmV2IiwiZm9yRWFjaCIsIm1hcCIsImZpbHRlciIsInNvbWUiLCJldmVyeSIsInJlZHVjZSIsIl90b0NvbnN1bWFibGVBcnJheSIsIkFycmF5IiwiaXNBcnJheSIsImkiLCJhcnIyIiwibGVuZ3RoIiwiZnJvbSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJmbiIsInJlc3VsdCIsInB1c2giLCJpbml0aWFsVmFsdWUiLCJhcnJheSIsInVuZGVmaW5lZCIsInNoaWZ0Il0sIm1hcHBpbmdzIjoiQ0FBUyxTQUFVQSxHQ0luQixRQUFBQyxHQUFBQyxHQUdBLEdBQUFDLEVBQUFELEdBQ0EsTUFBQUMsR0FBQUQsR0FBQUUsT0FHQSxJQUFBQyxHQUFBRixFQUFBRCxJQUNBRSxXQUNBRSxHQUFBSixFQUNBSyxRQUFBLEVBVUEsT0FOQVAsR0FBQUUsR0FBQU0sS0FBQUgsRUFBQUQsUUFBQUMsSUFBQUQsUUFBQUgsR0FHQUksRUFBQUUsUUFBQSxFQUdBRixFQUFBRCxRQXZCQSxHQUFBRCxLQXFDQSxPQVRBRixHQUFBUSxFQUFBVCxFQUdBQyxFQUFBUyxFQUFBUCxFQUdB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QUFWLE1BQW1COEIsR0FBU0QsRUFBR0MsRUFBUTlCLEVBQUlzQixHQUFJQSxFQUFHdEIsS0FFNUQ4QiIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdHZhciBfbWV0aG9kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdFxuXHR2YXIgYXJyID0gWzEsIDIsIC0zLCA0LCA1XTtcblx0XG5cdHZhciBSRURVQ0VfSU5JVElBTF9WQUxVRSA9IDI7XG5cdFxuXHR2YXIgZm9yRWFjaEZuID0gZnVuY3Rpb24gZm9yRWFjaEZuKGl0ZW0sIGluZGV4LCBhcnIpIHtcblx0ICByZXR1cm4gY29uc29sZS5sb2coJ0ZvckVhY2ggJyArIGluZGV4ICsgJzogJyArIGl0ZW0pO1xuXHR9O1xuXHR2YXIgbWFwRm4gPSBmdW5jdGlvbiBtYXBGbihpdGVtLCBpbmRleCwgYXJyKSB7XG5cdCAgcmV0dXJuIGl0ZW0gKiBpdGVtO1xuXHR9O1xuXHR2YXIgZmlsdGVyRm4gPSBmdW5jdGlvbiBmaWx0ZXJGbihpdGVtLCBpbmRleCwgYXJyKSB7XG5cdCAgcmV0dXJuIGl0ZW0gPiAzO1xuXHR9O1xuXHR2YXIgc29tZUZuID0gZnVuY3Rpb24gc29tZUZuKGl0ZW0sIGluZGV4LCBhcnIpIHtcblx0ICByZXR1cm4gaXRlbSA+IDA7XG5cdH07XG5cdHZhciBldmVyeUZuID0gZnVuY3Rpb24gZXZlcnlGbihpdGVtLCBpbmRleCwgYXJyKSB7XG5cdCAgcmV0dXJuIGl0ZW0gPiAwO1xuXHR9O1xuXHR2YXIgcmVkdWNlRm4gPSBmdW5jdGlvbiByZWR1Y2VGbihwcmV2LCBpdGVtLCBpbmRleCwgYXJyKSB7XG5cdCAgcmV0dXJuIHByZXYgKyBpdGVtO1xuXHR9O1xuXHRcblx0KDAsIF9tZXRob2RzLmZvckVhY2gpKGFyciwgZm9yRWFjaEZuKTtcblx0Y29uc29sZS5sb2coJ01hcDogJywgKDAsIF9tZXRob2RzLm1hcCkoYXJyLCBtYXBGbikpOyAvLyBbMSwgNCwgOSwgMTYsIDI1XVxuXHRjb25zb2xlLmxvZygnRmlsdGVyOiAnLCAoMCwgX21ldGhvZHMuZmlsdGVyKShhcnIsIGZpbHRlckZuKSk7IC8vIFs0LCA1XVxuXHRjb25zb2xlLmxvZygnU29tZTogJywgKDAsIF9tZXRob2RzLnNvbWUpKGFyciwgc29tZUZuKSk7IC8vIHRydWVcblx0Y29uc29sZS5sb2coJ0V2ZXJ5OiAnLCAoMCwgX21ldGhvZHMuZXZlcnkpKGFyciwgZXZlcnlGbikpOyAvLyBmYWxzZVxuXHRjb25zb2xlLmxvZygnUmVkdWNlICh3aXRob3V0IGluaXRpYWwpOicsICgwLCBfbWV0aG9kcy5yZWR1Y2UpKGFyciwgcmVkdWNlRm4pKTsgLy8gOVxuXHRjb25zb2xlLmxvZygnUmVkdWNlIChpbml0aWFsID0gJyArIFJFRFVDRV9JTklUSUFMX1ZBTFVFICsgJyk6JywgKDAsIF9tZXRob2RzLnJlZHVjZSkoYXJyLCByZWR1Y2VGbiwgUkVEVUNFX0lOSVRJQUxfVkFMVUUpKTsgLy8gMTFcblxuLyoqKi8gfSxcbi8qIDEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHRmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblx0XG5cdHZhciBmb3JFYWNoID0gZXhwb3J0cy5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChhcnIsIGZuKSB7XG5cdCAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcblx0ICAgIGZuKGFycltpXSwgaSwgYXJyKTtcblx0ICB9XG5cdH07XG5cdFxuXHR2YXIgbWFwID0gZXhwb3J0cy5tYXAgPSBmdW5jdGlvbiBtYXAoYXJyLCBmbikge1xuXHQgIHZhciByZXN1bHQgPSBbXTtcblx0ICBmb3JFYWNoKGFyciwgZnVuY3Rpb24gKGl0ZW0sIGksIGFycikge1xuXHQgICAgcmV0dXJuIHJlc3VsdC5wdXNoKGZuKGl0ZW0sIGksIGFycikpO1xuXHQgIH0pO1xuXHQgIHJldHVybiByZXN1bHQ7XG5cdH07XG5cdFxuXHR2YXIgZmlsdGVyID0gZXhwb3J0cy5maWx0ZXIgPSBmdW5jdGlvbiBmaWx0ZXIoYXJyLCBmbikge1xuXHQgIHZhciByZXN1bHQgPSBbXTtcblx0ICBmb3JFYWNoKGFyciwgZnVuY3Rpb24gKGl0ZW0sIGksIGFycikge1xuXHQgICAgaWYgKGZuKGl0ZW0sIGksIGFycikpIHtcblx0ICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XG5cdCAgICB9XG5cdCAgfSk7XG5cdCAgcmV0dXJuIHJlc3VsdDtcblx0fTtcblx0XG5cdHZhciBzb21lID0gZXhwb3J0cy5zb21lID0gZnVuY3Rpb24gc29tZShhcnIsIGZuKSB7XG5cdCAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcblx0ICAgIGlmIChmbihhcnJbaV0sIGksIGFycikpIHtcblx0ICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICB9XG5cdCAgfVxuXHQgIHJldHVybiBmYWxzZTtcblx0fTtcblx0XG5cdHZhciBldmVyeSA9IGV4cG9ydHMuZXZlcnkgPSBmdW5jdGlvbiBldmVyeShhcnIsIGZuKSB7XG5cdCAgdmFyIGZuTmVnYXRlID0gZnVuY3Rpb24gZm5OZWdhdGUoaXRlbSwgaSwgYXJyKSB7XG5cdCAgICByZXR1cm4gIWZuKGFycltpXSwgaSwgYXJyKTtcblx0ICB9O1xuXHQgIHJldHVybiAhc29tZShhcnIsIGZuTmVnYXRlKTtcblx0fTtcblx0XG5cdHZhciByZWR1Y2UgPSBleHBvcnRzLnJlZHVjZSA9IGZ1bmN0aW9uIHJlZHVjZShhcnIsIGZuLCBpbml0aWFsVmFsdWUpIHtcblx0ICB2YXIgYXJyYXkgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGFycikpO1xuXHQgIHZhciByZXN1bHQgPSBpbml0aWFsVmFsdWUgPT0gdW5kZWZpbmVkID8gYXJyYXkuc2hpZnQoKSA6IGluaXRpYWxWYWx1ZTtcblx0ICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjayhpdGVtLCBpLCBhcnIpIHtcblx0ICAgIHJldHVybiByZXN1bHQgPSBmbihyZXN1bHQsIGFycltpXSwgaSwgYXJyKTtcblx0ICB9O1xuXHQgIGZvckVhY2goYXJyYXksIGNhbGxiYWNrKTtcblx0ICByZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG4vKioqLyB9XG4vKioqKioqLyBdKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc2NyaXB0LmpzIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNGE0M2IzYTcwMWQ0MzA3MDdlYmEiLCJpbXBvcnQgeyBmb3JFYWNoLCBtYXAsIGZpbHRlciwgc29tZSwgZXZlcnksIHJlZHVjZSB9IGZyb20gJy4vbWV0aG9kcyc7XG5cbmxldCBhcnIgPSBbMSwgMiwgLTMsIDQsIDVdO1xuXG5jb25zdCBSRURVQ0VfSU5JVElBTF9WQUxVRSA9IDI7XG5cbmNvbnN0IGZvckVhY2hGbiA9IChpdGVtLCBpbmRleCwgYXJyKSAgICAgICA9PiBjb25zb2xlLmxvZyhgRm9yRWFjaCAke2luZGV4fTogJHtpdGVtfWApO1xuY29uc3QgbWFwRm4gICAgID0gKGl0ZW0sIGluZGV4LCBhcnIpICAgICAgID0+IGl0ZW0gKiBpdGVtO1xuY29uc3QgZmlsdGVyRm4gID0gKGl0ZW0sIGluZGV4LCBhcnIpICAgICAgID0+IGl0ZW0gPiAzO1xuY29uc3Qgc29tZUZuICAgID0gKGl0ZW0sIGluZGV4LCBhcnIpICAgICAgID0+IGl0ZW0gPiAwO1xuY29uc3QgZXZlcnlGbiAgID0gKGl0ZW0sIGluZGV4LCBhcnIpICAgICAgID0+IGl0ZW0gPiAwO1xuY29uc3QgcmVkdWNlRm4gID0gKHByZXYsIGl0ZW0sIGluZGV4LCBhcnIpID0+IHByZXYgKyBpdGVtO1xuXG5mb3JFYWNoKGFyciwgZm9yRWFjaEZuKTtcbmNvbnNvbGUubG9nKCAnTWFwOiAnICAgICwgbWFwKGFyciwgbWFwRm4pICk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFsxLCA0LCA5LCAxNiwgMjVdXG5jb25zb2xlLmxvZyggJ0ZpbHRlcjogJyAsIGZpbHRlcihhcnIsIGZpbHRlckZuKSApOyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBbNCwgNV1cbmNvbnNvbGUubG9nKCAnU29tZTogJyAgICwgc29tZShhcnIsIHNvbWVGbikgKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRydWVcbmNvbnNvbGUubG9nKCAnRXZlcnk6ICcgICwgZXZlcnkoYXJyLCBldmVyeUZuKSApOyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZhbHNlXG5jb25zb2xlLmxvZyggYFJlZHVjZSAod2l0aG91dCBpbml0aWFsKTpgICwgcmVkdWNlKGFyciwgcmVkdWNlRm4pICk7ICAgICAgICAvLyA5XG5jb25zb2xlLmxvZyggYFJlZHVjZSAoaW5pdGlhbCA9ICR7UkVEVUNFX0lOSVRJQUxfVkFMVUV9KTpgICwgcmVkdWNlKGFyciwgcmVkdWNlRm4sIFJFRFVDRV9JTklUSUFMX1ZBTFVFKSApOyAgLy8gMTFcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NjcmlwdC5qcyIsImV4cG9ydCBjb25zdCBmb3JFYWNoID0gKGFyciwgZm4pID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBmbihhcnJbaV0sIGksIGFycik7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG1hcCA9IChhcnIsIGZuKSA9PiB7XG4gIGxldCByZXN1bHQgPSBbXTtcbiAgZm9yRWFjaChhcnIsIChpdGVtLCBpLCBhcnIpID0+IHJlc3VsdC5wdXNoKGZuKGl0ZW0sIGksIGFycikpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGNvbnN0IGZpbHRlciA9IChhcnIsIGZuKSA9PiB7XG4gIGxldCByZXN1bHQgPSBbXTtcbiAgZm9yRWFjaChhcnIsIChpdGVtLCBpLCBhcnIpID0+IHtcbiAgICBpZiAoZm4oaXRlbSwgaSwgYXJyKSkge1xuICAgICAgcmVzdWx0LnB1c2goaXRlbSlcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgY29uc3Qgc29tZSA9IChhcnIsIGZuKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZuKGFycltpXSwgaSwgYXJyKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGNvbnN0IGV2ZXJ5ID0gKGFyciwgZm4pID0+IHtcbiAgY29uc3QgZm5OZWdhdGUgPSAoaXRlbSwgaSwgYXJyKSA9PiAhZm4oYXJyW2ldLCBpLCBhcnIpO1xuICByZXR1cm4gIXNvbWUoYXJyLCBmbk5lZ2F0ZSk7XG59XG5cbmV4cG9ydCBjb25zdCByZWR1Y2UgPSAoYXJyLCBmbiwgaW5pdGlhbFZhbHVlKSA9PiB7XG4gIGNvbnN0IGFycmF5ID0gWy4uLmFycl07XG4gIGxldCByZXN1bHQgPSAoaW5pdGlhbFZhbHVlID09IHVuZGVmaW5lZCkgPyBhcnJheS5zaGlmdCgpIDogaW5pdGlhbFZhbHVlO1xuICBjb25zdCBjYWxsYmFjayA9IChpdGVtLCBpLCBhcnIpID0+IChyZXN1bHQgPSBmbihyZXN1bHQsIGFycltpXSwgaSwgYXJyKSk7XG4gIGZvckVhY2goYXJyYXksIGNhbGxiYWNrKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21ldGhvZHMuanMiXSwic291cmNlUm9vdCI6IiJ9