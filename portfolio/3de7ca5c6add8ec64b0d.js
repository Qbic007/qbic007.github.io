(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{101:function(t){t.exports=JSON.parse('{"accent-color":"#ff9a00","text-color":"#2d3c4e","secondary-text-color":"#2b3948","link-color":"#4b6fd7","dark-gray":"#1b1f22","light-gray":"#898989","extra-light-gray":"#f0f0f0","danger-color":"#bf2929","success-color":"#00d70a","success-notify":"#4bb133","error-notify":"#b13333","placeholder-color":"#dee4ed","primary-gradient":"linear-gradient(to right, #ea7400 0%, #f29400 100%)","reverse-gradient":"linear-gradient(to right, #ff7f00 0%, #ff9d00 100%)","bp-desktop-hd":"1800px","bp-desktop":"1200px","bp-tablets":"768px","bp-phones":"480px"}')},146:function(t,e,i){},147:function(t,e,i){},148:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",t._g({staticClass:"basic-button",class:t.buttonClass,attrs:{type:t.type,disabled:t.disabled}},t.listerers),[t.icon?i("div",{staticClass:"basic-button__icon-wrapper"},[i("icon",{staticClass:"basic-button__icon",attrs:{name:t.icon}})],1):t._e(),i("div",{staticClass:"basic-button__text"},[t._t("default")],2)])};function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}r._withStripped=!0;var o={components:{Icon:i(55).a},props:{theme:{type:0,default:"primary"},type:{type:String,default:"button"},display:{type:0,default:"filled"},size:{type:0,default:"default"},disabled:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},icon:{type:String,default:""}},computed:{listerers:function(){var t=this;return function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(i,!0).forEach((function(e){s(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},this.$listeners,{click:function(e){t.disabled||t.$emit("click",e)}})},buttonClass:function(){var t;return s(t={"basic-button_circle":this.circle,"basic-button_disabled":this.disabled,"basic-button_bordered":this.bordered},"basic-button_".concat(this.size),!0),s(t,"basic-button_".concat(this.display),!0),s(t,"basic-button_".concat(this.theme),!0),t}}},a=(i(393),i(18)),l=Object(a.a)(o,r,[],!1,null,"55f99d00",null);l.options.__file="src/admin/components/BasicButton.vue";e.a=l.exports},149:function(t,e,i){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"error-tooltip"},[this._t("default")],2)};r._withStripped=!0;i(392);var n=i(18),s=Object(n.a)({},r,[],!1,null,"68d94cea",null);s.options.__file="src/admin/components/ErrorTooltip.vue";e.a=s.exports},392:function(t,e,i){"use strict";var r=i(146);i.n(r).a},393:function(t,e,i){"use strict";var r=i(147);i.n(r).a},420:function(t,e,i){},421:function(t,e,i){},422:function(t,e,i){},423:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"simple-input",class:{"simple-input_disabled":t.disabled}},[t.label?i("div",{staticClass:"simple-input__label"},[t._v(t._s(t.label))]):t._e(),i("input",t._g({staticClass:"simple-input__control",class:t.inputClass,attrs:{type:t.type,min:t.minValue,max:t.maxValue,step:t.step,readonly:t.readonly,placeholder:t.placeholder},domProps:{value:t.value}},t.listeners)),t.measure?i("div",{staticClass:"simple-input__measure"},[t._v(t._s(t.measure))]):t._e(),i("transition",{attrs:{name:"slide-up"}},[t.errorMessage?i("div",{staticClass:"simple-input__error"},[i("error-tooltip",[t._v(t._s(t.errorMessage))])],1):t._e()])],1)};function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}r._withStripped=!0;var o={components:{ErrorTooltip:i(149).a},props:{value:{type:String|Number,default:""},label:{type:String,default:""},maxValue:{type:Number},minValue:{type:Number},step:{type:Number,default:1},placeholder:{type:String,default:""},errorMessage:{type:String,default:""},readonly:{type:Boolean,default:!1},type:{type:String,default:"text"},size:{type:String,default:"default"},disabled:{type:Boolean,default:!1},measure:{type:String,default:""}},computed:{listeners:function(){var t=this;return function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(i,!0).forEach((function(e){s(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},this.$listeners,{input:function(e){t.disabled||t.$emit("input",e.target.value)}})},inputClass:function(){var t;return s(t={},"simple-input__control_".concat(this.size),!0),s(t,"simple-input__control_error",this.errorMessage),t}}},a=(i(434),i(18)),l=Object(a.a)(o,r,[],!1,null,"2d72ad90",null);l.options.__file="src/admin/components/SimpleInput.vue";e.a=l.exports},424:function(t,e,i){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card"},[this.$slots.media?e("div",{staticClass:"card__media"},[this._t("media")],2):this._e(),this.$slots.title?e("div",{staticClass:"card__header"},[this._t("title")],2):this._e(),e("div",{staticClass:"card__body"},[this._t("content")],2)])};r._withStripped=!0;i(433);var n=i(18),s=Object(n.a)({},r,[],!1,null,"05fa0d40",null);s.options.__file="src/admin/components/Card.vue";e.a=s.exports},425:function(t,e,i){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("h1",{staticClass:"page-title"},[this._v(this._s(this.$route.meta.title))])};r._withStripped=!0;i(432);var n=i(18),s=Object(n.a)({},r,[],!1,null,"f3f7a2ee",null);s.options.__file="src/admin/components/PageTitle.vue";e.a=s.exports},432:function(t,e,i){"use strict";var r=i(420);i.n(r).a},433:function(t,e,i){"use strict";var r=i(421);i.n(r).a},434:function(t,e,i){"use strict";var r=i(422);i.n(r).a},435:function(t,e,i){},436:function(t,e,i){},437:function(t,e,i){},438:function(t,e,i){},439:function(t,e,i){},440:function(t,e,i){},464:function(t,e,i){"use strict";var r=i(435);i.n(r).a},465:function(t,e,i){"use strict";var r=i(436);i.n(r).a},466:function(t,e,i){"use strict";var r=i(437);i.n(r).a},467:function(t,e,i){"use strict";var r=i(438);i.n(r).a},468:function(t,e,i){"use strict";var r=i(439);i.n(r).a},469:function(t,e,i){"use strict";var r=i(440);i.n(r).a},484:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about-page"},[t.isLoading?i("div",{staticClass:"about-page__preloader"},[i("clip-loader",{attrs:{color:t.accentColor,size:70}})],1):[i("div",{staticClass:"about-page__header"},[i("page-title"),t.isShowNewSkill?t._e():i("div",{staticClass:"about-page__add-group"},[i("basic-button",{attrs:{size:"small",icon:"plus",display:"flat",circle:!0},on:{click:t.showNewSkill}},[t._v("Добавить группу")])],1)],1),i("div",{staticClass:"about-page__content"},[t.isShowNewSkill?i("div",{staticClass:"about-page__skill-group"},[i("new-skill-group",{on:{"create-category":t.createCategory,reset:function(e){t.isShowNewSkill=!1}}})],1):t._e(),t._l(t.categories,(function(e){return i("div",{staticClass:"about-page__skill-group"},[i("skill-group",{key:e.id,attrs:{title:e.category,"category-id":e.id,skills:t.skillsByCategory[e.id]},on:{"update-category":function(i){return t.updateCategory(e.id,i)},"delete-group":function(i){return t.deleteSkillGroup(e.id)},"add-skill":function(i){return t.createSkill(e.id,i)},"update-skill":t.updateSkill,"delete-skill":t.deleteSkill}})],1)}))],2)]],2)};r._withStripped=!0;var n=i(68),s=i(431),o=i(101),a=i(425),l=i(148),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("card",{staticClass:"skill-group"},[i("category-control",{attrs:{slot:"title","is-edit-mode":t.isEditMode},on:{edit:function(e){t.isEditMode=!0},cancel:t.onReset,save:t.onSave},slot:"title",model:{value:t.categoryTitle,callback:function(e){t.categoryTitle=e},expression:"categoryTitle"}}),i("template",{slot:"content"},[i("div",{staticClass:"skill-group__new-skill"},[i("new-skill",{attrs:{"is-disabled":!0}})],1)])],2)};c._withStripped=!0;var u=i(424),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"category-control"},[i("div",{staticClass:"category-control__input"},[i("simple-input",{attrs:{value:t.value,readonly:!t.isEditMode,"error-message":t.validation.firstError("value"),size:"large",placeholder:"Название новой группы"},on:{input:function(e){return t.$emit("input",e)},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.save(e)}}})],1),i("div",{staticClass:"category-control__buttons"},[t.isEditMode?[i("button",{key:"save",staticClass:"category-control__button category-control__button_save",on:{click:t.save}},[i("icon",{attrs:{name:"tick"}})],1),i("button",{key:"cancel",staticClass:"category-control__button category-control__button_cancel",on:{click:function(e){return t.$emit("cancel")}}},[i("icon",{attrs:{name:"cross"}})],1)]:[i("button",{key:"edit",staticClass:"category-control__button category-control__button_edit",on:{click:function(e){return t.$emit("edit")}}},[i("icon",{attrs:{name:"pencil"}})],1),i("button",{key:"delete",staticClass:"category-control__button category-control__button_delete",on:{click:function(e){return t.$emit("delete")}}},[i("icon",{attrs:{name:"trash"}})],1)]],2)])};p._withStripped=!0;var d=i(70),f=i.n(d),h=i(423),b=i(55),y=f.a.Validator,v={components:{SimpleInput:h.a,Icon:b.a},mixins:[f.a.mixin],props:{value:{type:String,default:""},isEditMode:{type:Boolean,default:!1}},watch:{isEditMode:function(t){t&&this.$el.querySelectorAll("input")[0].focus()}},validators:{value:function(t){return y.value(t).required("Введите название группы")}},methods:{save:function(){var t=this;this.$validate().then((function(e){e&&(t.$emit("save"),t.validation.reset())}))}}},_=(i(464),i(18)),m=Object(_.a)(v,p,[],!1,null,"6eb88aff",null);m.options.__file="src/admin/components/CategoryControl.vue";var g=m.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{staticClass:"new-skill",on:{submit:function(e){return e.preventDefault(),t.createSkill(e)}}},[i("div",{staticClass:"new-skill__title"},[i("simple-input",{attrs:{disabled:t.isDisabled,"error-message":t.validation.firstError("title"),placeholder:"Новый навык"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),i("div",{staticClass:"new-skill__percent"},[i("simple-input",{attrs:{disabled:t.isDisabled,"error-message":t.validation.firstError("percent"),type:"number",measure:"%"},model:{value:t.percent,callback:function(e){t.percent=e},expression:"percent"}})],1),i("div",{staticClass:"new-skill__button"},[i("basic-button",{attrs:{type:"submit",icon:"plus",display:"flat",disabled:t.isDisabled,circle:!0}})],1)])};k._withStripped=!0;var w=f.a.Validator,S={components:{SimpleInput:h.a,BasicButton:l.a},props:{isDisabled:{type:Boolean,default:!1}},mixins:[f.a.mixin],data:function(){return{title:"",percent:100}},validators:{title:function(t){return w.value(t).required("Введите навык")},percent:function(t){return w.value(t).between(0,100,"Ошибка")}},methods:{createSkill:function(){var t=this;this.$validate().then((function(e){e&&(t.$emit("add",{title:t.title,percent:parseInt(t.percent)}),t.resetSkillData(),t.validation.reset())}))},resetSkillData:function(){this.title="",this.percent=100}}},C=(i(465),Object(_.a)(S,k,[],!1,null,"6a42db7e",null));C.options.__file="src/admin/components/NewSkill.vue";var O=C.exports,x={components:{Card:u.a,CategoryControl:g,NewSkill:O},data:function(){return{isEditMode:!0,categoryTitle:""}},methods:{onReset:function(){this.$emit("reset")},onSave:function(){this.categoryTitle&&this.$emit("create-category",this.categoryTitle)}}},j=(i(466),Object(_.a)(x,c,[],!1,null,"bcaa1924",null));j.options.__file="src/admin/components/NewSkillGroup.vue";var E=j.exports,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("card",{staticClass:"skill-group"},[i("category-control",{staticClass:"skill-group__category",attrs:{slot:"title","is-edit-mode":t.isEditMode},on:{edit:function(e){t.isEditMode=!0},cancel:t.onResetCategoryChanges,delete:t.onDeleteSkillGroup,save:t.onSaveCategoryChanges},slot:"title",model:{value:t.categoryTitle,callback:function(e){t.categoryTitle=e},expression:"categoryTitle"}}),i("template",{slot:"content"},[i("table",{staticClass:"skill-group__skills-table"},t._l(t.skills,(function(e){return i("skill-row",{key:e.id,attrs:{title:e.title,percent:e.percent},on:{save:function(i){return t.onUpdateSkill(e,i)},delete:function(i){return t.$emit("delete-skill",e.id)}}})})),1),i("div",{staticClass:"skill-group__new-skill"},[i("new-skill",{on:{add:function(e){return t.$emit("add-skill",e)}}})],1)])],2)};P._withStripped=!0;var T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",{staticClass:"skill"},[i("td",{staticClass:"skill__title"},[i("simple-input",{attrs:{readonly:!t.isEditMode,"error-message":t.validation.firstError("skillTitle"),placeholder:"Название навыка"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSave(e)}},model:{value:t.skillTitle,callback:function(e){t.skillTitle=e},expression:"skillTitle"}})],1),i("td",{staticClass:"skill__percent"},[i("simple-input",{attrs:{readonly:!t.isEditMode,"error-message":t.validation.firstError("skillPercent"),type:"number",measure:"%"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSave(e)}},model:{value:t.skillPercent,callback:function(e){t.skillPercent=e},expression:"skillPercent"}})],1),i("td",{staticClass:"skill__controls"},[t.isEditMode?i("div",{staticClass:"skill__buttons"},[i("button",{key:"save",staticClass:"skill__button skill__button_save",on:{click:t.onSave}},[i("icon",{attrs:{name:"tick"}})],1),i("button",{key:"cancel",staticClass:"skill__button skill__button_cancel",on:{click:t.onCancel}},[i("icon",{attrs:{name:"cross"}})],1)]):i("div",{staticClass:"skill__buttons"},[i("button",{key:"edit",staticClass:"skill__button skill__button_edit",on:{click:t.onEdit}},[i("icon",{attrs:{name:"pencil"}})],1),i("button",{key:"delete",staticClass:"skill__button skill__button_remove",on:{click:t.onDelete}},[i("icon",{attrs:{name:"trash"}})],1)])])])};T._withStripped=!0;var $=f.a.Validator,D={components:{SimpleInput:h.a,Icon:b.a},props:{title:{type:String,default:""},percent:{type:Number,default:100}},mixins:[f.a.mixin],watch:{isEditMode:function(t){t&&this.$el.querySelectorAll("input")[0].focus()}},data:function(){return{isEditMode:!1,skillTitle:"",skillPercent:""}},validators:{skillTitle:function(t){return $.value(t).required("Введите навык")},skillPercent:function(t){return $.value(t).between(0,100,"Ошибка")}},methods:{onSave:function(){var t=this;this.$validate().then((function(e){e&&(t.$emit("save",{title:t.skillTitle,percent:t.skillPercent}),t.isEditMode=!1,t.validation.reset())}))},onCancel:function(){this.skillTitle=this.title,this.skillPercent=this.percent,this.isEditMode=!1},onDelete:function(){this.$emit("delete")},onEdit:function(){this.isEditMode=!0}},created:function(){this.skillTitle=this.title,this.skillPercent=this.percent}},M=(i(467),Object(_.a)(D,T,[],!1,null,"3a490b79",null));M.options.__file="src/admin/components/SkillRow.vue";var N=M.exports;function R(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function B(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var G={components:{Card:u.a,CategoryControl:g,SkillRow:N,NewSkill:O},props:{title:{type:String,default:""},categoryId:{type:Number,default:0},skills:{type:Array,default:function(){return[]}}},data:function(){return{categoryTitle:"",isEditMode:!1}},methods:{onUpdateSkill:function(t,e){t.title===e.title&&t.percent===e.percent||this.$emit("update-skill",function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?R(i,!0).forEach((function(e){B(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):R(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},t,{},e))},onResetCategoryChanges:function(){this.categoryTitle=this.title,this.isEditMode=!1},onSaveCategoryChanges:function(){this.$emit("update-category",this.categoryTitle),this.isEditMode=!1},onDeleteSkillGroup:function(){this.$emit("delete-group")}},created:function(){this.categoryTitle=this.title}},I=(i(468),Object(_.a)(G,P,[],!1,null,"766887de",null));I.options.__file="src/admin/components/SkillGroup.vue";var z=I.exports;function V(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function L(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?V(i,!0).forEach((function(e){q(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):V(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function q(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var A={components:{PageTitle:a.a,BasicButton:l.a,NewSkillGroup:E,SkillGroup:z,ClipLoader:s.ClipLoader},data:function(){return{isShowNewSkill:!1,isLoading:!1,accentColor:o["accent-color"]}},computed:L({},Object(n.c)("skills",{categories:function(t){return t.categories},skills:function(t){return t.skills}}),{skillsByCategory:function(){var t={};return this.categories.forEach((function(e){t[e.id]=[]})),this.skills.forEach((function(e){t[e.category]&&t[e.category].push(e)})),t}}),methods:L({},Object(n.b)("tooltips",["showTooltip"]),{},Object(n.b)("skills",["fetchSkills","addSkill","editSkill","removeSkill","fetchCategories","addNewSkillGroup","updateSkillGroup","removeSkillGroup"]),{showNewSkill:function(){this.isShowNewSkill=!0},hideNewSkill:function(){this.isShowNewSkill=!1},createCategory:function(t){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(this.addNewSkillGroup(t));case 3:this.showTooltip({type:"success",text:"Группа успешно добавлена",duration:3e3}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),this.showTooltip({type:"error",text:e.t0.message,duration:3e3});case 9:this.isShowNewSkill=!1;case 10:case"end":return e.stop()}}),null,this,[[0,6]])},updateCategory:function(t,e){var i;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(i=this.categories.find((function(t){return t.id})))||i.category!==e){r.next=3;break}return r.abrupt("return");case 3:return r.prev=3,r.next=6,regeneratorRuntime.awrap(this.updateSkillGroup({id:t,title:e}));case 6:this.showTooltip({type:"success",text:"Группа успешно обновлена",duration:3e3}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(3),this.showTooltip({type:"error",text:r.t0.message,duration:3e3});case 12:case"end":return r.stop()}}),null,this,[[3,9]])},createSkill:function(t,e){return regeneratorRuntime.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,regeneratorRuntime.awrap(this.addSkill(L({},e,{category:t})));case 3:this.showTooltip({type:"success",text:"Навык успешно добавлен",duration:3e3}),i.next=9;break;case 6:i.prev=6,i.t0=i.catch(0),this.showTooltip({type:"error",text:i.t0.message,duration:3e3});case 9:case"end":return i.stop()}}),null,this,[[0,6]])},updateSkill:function(t){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(this.editSkill(t));case 3:this.showTooltip({type:"success",text:"Навык успешно обновлен",duration:3e3}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),this.showTooltip({type:"error",text:e.t0.message,duration:3e3});case 9:case"end":return e.stop()}}),null,this,[[0,6]])},deleteSkill:function(t){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(this.showTooltip({type:"success",text:"Навык успешно удален",duration:3e3}));case 3:this.removeSkill(t),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),this.showTooltip({type:"error",text:e.t0.message,duration:3e3});case 9:case"end":return e.stop()}}),null,this,[[0,6]])},deleteSkillGroup:function(t){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(this.removeSkillGroup(t));case 3:this.showTooltip({type:"success",text:"Группа успешно удалена",duration:3e3}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),this.showTooltip({type:"error",text:e.t0.message,duration:3e3});case 9:case"end":return e.stop()}}),null,this,[[0,6]])},fetchData:function(){return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.prev=1,t.next=4,regeneratorRuntime.awrap(Promise.all([this.fetchSkills(),this.fetchCategories()]));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),this.showTooltip({type:"error",text:"Произошла ошибка при загрузке данных",duration:3e3});case 9:return t.prev=9,this.isLoading=!1,t.finish(9);case 12:case"end":return t.stop()}}),null,this,[[1,6,9,12]])}}),created:function(){this.fetchData()}},J=(i(469),Object(_.a)(A,r,[],!1,null,"75a44943",null));J.options.__file="src/admin/views/About.vue";e.default=J.exports}}]);