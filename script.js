var payload = {
    menu: [
        {id: '0', name:'Welding' , link: '/welding' , sub: [
	            {name: 'TIG',link: '/tig', sub: [
	            	{name: 'TIG Wire', link: '/tig-wire' , sub: null},
	            	{name: 'TIG Machines', link: '/tig-machines' , sub: null},
	            	{name: 'TIG Consumables', link: '/tig-consumables' , sub: null}
	            ]},
	            {name: 'Stick',link: '/stick', sub: [
	            	{name: 'Stick Machines', link: '/stick-machines' , sub: null},
	            	{name: 'Stick Electrodes', link: '/stick-electrodes' , sub: null},
	            	{name: 'Stick Consumables', link: '/stick-consumables' , sub: null}
	            ]},
	            {name: 'MIG',link: '/mig', sub: [
	            	{name: 'MIG Machines' , link: '/mig-machines' , sub: null},
	            	{name: 'MIG Wire' , link: '/mig-wire' , sub: null},
	            	{name: 'MIG Consumables' , link: '/mig-consumables' , sub: null}
	            ]},
	            {name: 'General',link: '/general', sub: [
	            	{name: 'Other General' , link: '/other-general' , sub: null},
	            	{name: 'Tools (Hammers, Brushes, Pliers)' , link: '/tools' , sub: null},
	            	{name: 'Cable & Lugs (Cable, Lugs, Ground Clamps)' , link: '/cable-n-lugs' , sub: null},
	            	{name: 'Inert Gas Accessories (Regulators, Flow Meters, Gas Hose)' , link: '/inert-gas-accessories' , sub: null}
	            ]},
	            {name: 'Plasma',link: '/plasma', sub: [
	            	{name: 'Plasma Machines' , link: '/plasma-machines' , sub: null},
	            	{name: 'Plasma Consumables' , link: '/plasma-consumables' , sub: null}
	            ]},
	            {name: 'Oxy-Fuel',link: '/oxy-fuel', sub: [
	            	{name: 'Regulator & Gas Apparatus' , link: '/regulator-gas-apparatus' , sub: null},
	            	{name: 'Torches & Torch Kits' , link: '/torches' , sub: null},
	            	{name: 'Brazing Alloys' , link: '/brazing-alloys' , sub: null},
	            	{name: 'Oxy-Fuel Consumables & Accessories' , link: '/consumables-accesories' , sub: null}
	            ]}
            ]
        },
        {id: '1', name: 'Abrasives' , link: '/abrasives', sub: [
            {name: 'Micro Abrasives, Mini Abrasives, Carbide Burrs',link: '/micro-abrasives-mini-abrasives-carbide-burrs', sub: [
            		{name: 'Shank Mounted Points & Grinding Wheels' , link: '/shank-mounted' , sub: null},
	            	{name: 'Mounted Points, Brushes, Wire Wheels, Drills & Kits' , link: '/mounted-points' , sub: null},
	            	{name: 'Tungsten Carbide Burrs' , link: '/tungsten-carbide-burrs' , sub: null},
	            	{name: 'Shank Mounted Rasps & Rotary Files' , link: '/skank-rasps' , sub: null},
	            	{name: 'Bobs, Stones & Sanding Drums' , link: '/bobs-sones-sanding-drums' , sub: null},
	            	{name: 'See all' , link: '/abrasives' , sub: null}
	            	
            ]},
            {name: 'Hole Saws, Mandrels & Pilot Drills' , link: '/hole-saws-mandrels' , sub: null},
            {name: 'Sand Screen, Emery Cloth & Surface Prep Pads' , link: '/sand-screen-emery-cloth' , sub: null},
            {name: 'Wire Brushes',link: '/wire-brushes', sub: [
            		{name: 'Wire Cup Brushes' , link: '/wire-cup-brushes' , sub: null},
	            	{name: 'Wire Wheel Brushes' , link: '/wire-wheel-brushes' , sub: null},
	            	{name: 'End Brushes' , link: '/end-brushes' , sub: null},
	            	{name: 'Hand Scratch Brushes' , link: '/hand-scratch-brushes' , sub: null},
	            	{name: 'Parts & Tube Cleaning' , link: '/parts-tube-cleaning' , sub: null}
            ]},
            {name: 'Sanding & Grinding Discs' , link: '/sanding-grinding-discs' , sub: null},
            {name: 'Cutting Tools',link: '/cutting-tools', sub: [
            		{name: 'High Speed Steel Taps - Taper, Bottom, Plug' , link: '/' , sub: null},
	            	{name: 'Screw Extractors & Sets' , link: '/screw-extractors' , sub: null},
	            	{name: 'High Speed Steel Tapered Pipe Taps & Carbon Steel Hex Re-Threading Dies' , link: '/' , sub: null},
	            	{name: 'Drill Bits' , link: '/drill-bits' , sub: null},
	            	{name: 'Hacksaws & Hacksaw Blades' , link: '/hacksaws-and-blades' , sub: null}
            ]},
            {name: 'Test long one',link: '/', sub: [
                {name: 'lorem ipsum 2-2-0',link: '2-2-0', sub: null},
                {name: 'lorem ipsum 2-2-1',link: '2-2-1', sub: null},
                {name: 'lorem ipsum 2-2-2',link: '2-2-2', sub: null},
                {name: 'lorem ipsum 2-2-3',link: '2-2-3', sub: null},
                {name: 'lorem ipsum 2-2-4',link: '2-2-4', sub: null},
                {name: 'lorem ipsum 2-2-5',link: '2-2-5', sub: null},
                {name: 'lorem ipsum 2-2-4',link: '2-2-4', sub: null},
                {name: 'lorem ipsum 2-2-5',link: '2-2-5', sub: null},
                {name: 'lorem ipsum 2-2-4',link: '2-2-4', sub: null},
                {name: 'lorem ipsum 2-2-5',link: '2-2-5', sub: null},
                {name: 'ff lorem ipsum 2-2-4',link: '2-2-4x', sub: null},
                {name: 'gg lorem ipsum 2-2-5',link: '2-2-5f', sub: null},
                {name: 'ww lorem ipsum 2-2-4',link: '2-2-4w', sub: null},
                {name: 'jj lorem ipsum 2-2-5',link: '2-2-5j', sub: null},
                {name: 'lorem ipsum 2-2-4',link: '2-2-4', sub: null},
                {name: 'ff 22 lorem ipsum 2-2-4',link: '2-2-4x', sub: null},
                {name: 'gg 33 lorem ipsum 2-2-5',link: '2-2-5f', sub: null},
                {name: 'ww 55 lorem ipsum 2-2-4',link: '2-2-4w', sub: null},
                {name: 'jj 5535 lorem ipsum 2-2-5',link: '2-2-5j', sub: null},
                {name: 'lorem ipsum 2-2-4',link: '2-2-4', sub: null},
                {name: 'lorem ipsum 2-2-5g',link: '2-2-8', sub: [
                	{name: 'lorem-ipsum 2-2-8-1' , link: '2-2-8-1' , sub:null},
                	{name: 'lorem-ipsum 2-2-8-2' , link: '2-2-8-2' , sub:null},
                	{name: 'lorem-ipsum 2-2-8-3' , link: '2-2-8-3' , sub:null},
                	{name: 'lorem-ipsum 2-2-8-4' , link: '2-2-8-4' , sub:null}
                ]},
                {name: 'lorem ipsum 2-2-6',link: '2-2-9', sub: null}
            ]}
            ]
        },
        {id: '2',name:'Shop Tools' , link:'/shop-tools',sub: [
        	{name: 'Steel & Aluminum',link: '/steel-aluminium', sub: [
            		{name: 'Steel Products' , link: '/steel-products' , sub: null},
	            	{name: 'Aluminum Products' , link: '/aluminium-products' , sub: null}
            ]},
            {name: 'Solder',link: '/solder', sub: [
            		{name: 'Solder Types' , link: '/solder-types' , sub: null},
	            	{name: 'Solder Tools' , link: '/solder-tools' , sub: null},
	            	{name: 'Flux' , link: '/flux' , sub: null}
            ]},
            {name: 'Air Fittings, Hoses & Tools',link: '/air-fittings-hoses-and-tools', sub: [
            		{name: 'Air Hose' , link: '/air-hose' , sub: null},
	            	{name: 'Plugs & Couplers ' , link: '/' , sub: null},
	            	{name: 'Pneumatic Tools' , link: '/' , sub: null},
	            	{name: 'Air Accessories' , link:'/' , sub: null}
            ]},
            {name: 'Workshop Tools',link: '/workshop-tools', sub: null},
            {name: 'Weedburners',link: '/weedburners', sub: null},
            {name: 'Electrical',link: '/electrical', sub: null},
            {name: 'Chain, Wire Rope & Accessories',link: '/chain-wire-rope', sub: [
            		{name: 'Wire Rope' , link: '/wire-rope' , sub: null},
	            	{name: 'Wire Rope Accessories ' , link: '/wire-rope-accessories' , sub: null},
	            	{name: 'Chain' , link: '/' , sub: null},
	            	{name: 'Chain Accessories' , link: '/' , sub: null}
            ]},
            {name: 'Cable Ties',link: '/cable-ties', sub: [
            		{name: 'Screw Mounts' , link: '/screw-mounts' , sub: null},
	            	{name: 'Releasable' , link: '/releasable' , sub: null},
	            	{name: 'Standard Duty' , link: '/standard-duty' , sub: null},
	            	{name: 'Ultra Light-Duty' , link: '/ultra-light-duty' , sub: null},
	            	{name: 'Super Light-Duty' , link: '/super-light-duty' , sub: null},
	            	{name: 'See all' , link: '/cable-ties' , sub: null}
            ]},
            {name: 'Pressure Washer Parts',link: '/pressure-washer-parts', sub: [
            		{name: 'Hose Connectors' , link: '/hose-connectors' , sub: null},
	            	{name: 'Nozzles' , link: '/nozzles' , sub: null},
	            	{name: 'Guns & Lances' , link: '/guns-and-lances' , sub: null},
	            	{name: 'Hose' , link: '/hose' , sub: null}
            ]},
            {name: 'Plumbers and Roofers Torch',link: '/plumbers-roofers-torch', sub: null},
            {name: 'Paint Makers',link: '/paint-markers', sub: null}
            
        ]},
        {id: '3',name:'Safety' , link:'/safety',sub: [
        	{name: 'Welding Safety',link: '/welding-safety', sub: [
				{name: 'Eye & Face Protection',link: '/eye-and-face-protection', sub: null},
	        	{name: 'Welding Protective Clothing',link: '/welding-protective-clothing', sub: null},
	        	{name: 'Hand Protection',link: '/hand-protection', sub: null}
        	]},
        	{name: 'General Safety',link: '/general-safety', sub: [
				{name: 'Hearing Protection',link: '/hearing-protection', sub: null},
	        	{name: 'Respiratory Protection',link: '/', sub: null},
	        	{name: 'Vehicle Safety',link: '/', sub: null},
	        	{name: 'Head Protection',link: '/', sub: null},
	        	{name: 'Eye & Face Protection',link: '/', sub: null},
	        	{name: 'See all',link: '/', sub: null}
        	]}
        ]},
        {id: '4',name:'Outlet' , link:'/outlet',sub: null}
    ]
};

// render functions
const createLI = (el) => {

	let li = document.createElement("li");
	li.classList.add("col-xs-12");
	let span = document.createElement("span");
	span.classList.add("title");
	let link = document.createElement("a");

	link.text = el.name;
	link.setAttribute("href" , el.link);

	span.append(link);
	li.append(span);

	if(el.sub){
	  let showDropdown = document.createElement("span");
	  addClassMulti(["fa" , "fa-angle-right" , "show-dropdown"] , showDropdown);
	  li.append(showDropdown);
	  li.append(createUL(el.sub));
	}
	return li;
}

const createUL = (data) => {

	let divWrapper = document.createElement("div");
	addClassMulti(["sub-dropdown-menu-wrapper" , "col-xs-12"] , divWrapper)


	let closeButton = document.createElement("i");
	addClassMulti(["btn" , "btn-default" , "fa" , "fa-angle-left" , "close-submenu"] , closeButton);


	let list = document.createElement("ul");
	list.classList.add("sub-dropdown-menu");



	divWrapper.append(closeButton);

	data.forEach(function(obj){list.append(createLI(obj))});

	divWrapper.append(list);

	return divWrapper;
}

// helper functions
const Menu = (targetEl , data) => {data.map((obj) => {document.querySelector(targetEl).append(createLI(obj))})}
const addClassMulti = (classes , el) => {classes.forEach(function(_class) {el.classList.add(_class)})}
      
// render menu
Menu("ul#menu" , payload.menu);

let closeMenu = document.querySelector('.close-menu');
let openMenu = document.querySelector('.open-menu');
let menu = document.querySelector('.menu-wrapper');
let openDropdowns = document.querySelectorAll('ul#menu .show-dropdown');
let closeDropdowns = document.querySelectorAll('ul#menu .close-submenu');
let dropdownWrappers = document.querySelectorAll('.sub-dropdown-menu-wrapper');

// events
closeMenu.addEventListener('click' , (e) => {
	menu.classList.remove('open');
} , false);

openMenu.addEventListener('click' , (e) => { 
	menu.classList.add('open');
} , false);

for (var i = 0; i < openDropdowns.length ; i++) {
	openDropdowns[i].addEventListener('click' , (e) => {
        e.currentTarget.nextElementSibling.classList.add('open');
        // never freeze the main menu-wrapper
        // if(!e.currentTarget.parentNode.parentNode.parentNode.classList.contains('menu-wrapper')){
        //	e.currentTarget.parentNode.parentNode.parentNode.classList.add('freeze');
        // }
        e.currentTarget.parentNode.parentNode.parentNode.classList.add('freeze');
        
  } , false)
}

for (var i = 0; i < closeDropdowns.length ; i++) {
	closeDropdowns[i].addEventListener('click' , (e) => {
        e.currentTarget.parentNode.classList.remove('open');
        e.currentTarget.parentNode.parentNode.parentNode.parentNode.classList.remove('freeze');
        // scroll back to the top of the previous sub menu when closing the current one
        e.currentTarget.parentNode.parentNode.parentNode.parentNode.scroll(0,0);
  } , false)
}
