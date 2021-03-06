
/**
 * Insert Web editor modal to the DOM
 * */ 

const createWEApp = ()=>{
    const WEAPP = document.createElement('div');
    WEAPP.setAttribute('id', 'we-app-window');
    WEAPP.setAttribute('contenteditable', 'false');
    WEAPP.innerHTML = ` 
 <header id="we-app-header" contenteditable="false">
    <h3 id="we-header-title">Web Editor</h3>
    <button id="we-app-btn-close">&times;</button>
  </header>
  <div id="we-app-body" contenteditable="false">
    
    <div id="we-editor-pane" class="main-tab-pane active">
      <div id="we-content-previewer">
        <div id="we-img-content">
          <div id="we-content-img-wrapper">
            <input type="file" accept="image/x-png,image/gif,image/jpeg" id="we-img-control" />
            <div id="we-image-chooser">
              <span>Choose Image..</span>
            </div>
          </div>
          <div class="we-hr-from">
            <div class="we-control-group">
              <label>Image URL</label>
              <input type="text" placeholder="Image URL" id="we-img-url" class="we-control" />
            </div>
          </div>
        </div>
      </div>

      <div id="we-allignment" class="we-hr-from">
        <button class="we-btn" data-align="left" id="we-align-left"></button>
        <button class="we-btn" data-align="center" id="we-align-center"></button>
        <button class="we-btn" data-align="right" id="we-align-right"></button>
        <button class="we-btn" data-align="justify" id="we-align-justify"></button>
      </div>

    <div id="we-typo">
      <div class="we-hr-from">
        <div class="we-control-group we-color-group">
          <label>Color</label>
          <button class="we-clr-btn" id="we-fc"></button>
        </div>

        <div class="we-control-group">
          <label>Style</label>
          <button class="we-btn" id="we-fb">B</button>
          <button class="we-btn" id="we-fu">U</button>
          <button class="we-btn" id="we-fi">i</button>
        </div>
      </div>
      <div class="we-hr-from">
        <div class="we-control-group">
          <label>Font Size</label>
          <input data-target="fontSize" type="number" min="0" id="we-fzc" class="we-control" />
        </div>
        <div class="we-control-group">
          <label>Line Height</label>
          <input data-target="lineHeight" type="number" min="0" id="we-flhc" class="we-control" />
        </div>

        <div class="we-control-group">
          <label>Letter Spacing</label>
          <input data-target="letterSpacing" type="number" min="0" id="we-flsc" class="we-control" />
        </div>
      </div>
    </div>

    <div id="we-size">
      <div class="we-hr-from">
        <div class="we-control-group">
          <label>Width</label>
          <input type="number" min="0" id="we-swc" class="we-control" />
        </div>

        <div class="we-control-group">
          <label>Height</label>
          <input type="number" min="0" id="we-shc" class="we-control" />
        </div>
      </div>
    </div>

    <div id="we-spacing">
      <div id="we-margin">
        <h4 class="we-h4">Margin: Outer Spacing</h4>
        <div class="we-hr-from">
          <div class="we-control-group">
            <label>Top</label>
            <input data-target="marginTop" type="number" id="we-mtc" class="we-control" />
          </div>

          <div class="we-control-group">
            <label>Left</label>
            <input data-target="marginLeft" type="number" id="we-mlc" class="we-control" />
          </div>

          <div class="we-control-group">
            <label>Right</label>
            <input data-target="marginRight" type="number" id="we-mrc" class="we-control" />
          </div>

          <div class="we-control-group">
            <label>Bottom</label>
            <input data-target="marginBottom" type="number" id="we-mbc" class="we-control" />
          </div>

        </div>
      </div>

      <div id="we-padding">
        <h4 class="we-h4">Padding: Inner Spacing</h4>
        <div class="we-hr-from">
          <div class="we-control-group">
            <label>Top</label>
            <input data-target="paddingTop" type="number" min="0" id="we-ptc" class="we-control" />
          </div>

          <div class="we-control-group">
            <label>Left</label>
            <input data-target="paddingLeft" type="number" min="0" id="we-plc" class="we-control" />
          </div>

          <div class="we-control-group">
            <label>Right</label>
            <input data-target="paddingRight" type="number" min="0" id="we-prc" class="we-control" />
          </div>

          <div class="we-control-group">
            <label>Bottom</label>
            <input data-target="paddingBottom" type="number" min="0" id="we-pbc" class="we-control" />
          </div>

        </div>
      </div>
    </div>

    <div id="we-border">
      <h4 class="we-h4">Border</h4>
      <div id="we-border-container">
        <div id="we-border-forms">

          <div id="we-border-form-all" class="we-hr-from">
            <div class="we-control-group">
              <label>Size</label>
              <input data-target="borderWidth" type="number" min="0" id="we-bsc" class="we-control" />
            </div>
            <div class="we-control-group we-select-group">
              <label>Style</label>
              <select data-target="borderStyle" id="we-bct" class="we-control">
                <option value="none">None</option>
                <option value="solid">Solid</option>
                <option value="dotted">Dotted</option>
                <option value="dashed">Dashed</option>
                <option value="double">Double</option>
                <option value="groove">Groove</option>
                <option value="ridge">Ridge</option>
                <option value="inset">Inset</option>
                <option value="outset">Outset</option>
              </select>
            </div>
            <div class="we-control-group we-color-group">
              <label>Color</label>
              <button class="we-clr-btn" id="we-bcc"></button>
            </div>
          </div>
          <!--End All -->

          <div id="we-border-split">

            <div class="we-hr-from active">
              <div class="we-control-group">
                <label>Top: Size </label>
                <input data-target="borderTopWidth" type="number" min="0" id="we-bt-sc" class="we-control" />
              </div>
              <div class="we-control-group we-select-group">
                <label>Style</label>
                <select data-target="borderTopStyle" id="we-bt-ct" class="we-control">
                  <option value="none">None</option>
                  <option value="solid">Solid</option>
                  <option value="dotted">Dotted</option>
                  <option value="dashed">Dashed</option>
                  <option value="double">Double</option>
                  <option value="groove">Groove</option>
                  <option value="ridge">Ridge</option>
                  <option value="inset">Inset</option>
                  <option value="outset">Outset</option>
                </select>
              </div>
              <div class="we-control-group we-color-group">
                <label>Color</label>
                <button class="we-clr-btn" id="we-bt-cc"></button>
              </div>
            </div>

            <div class="we-hr-from active">
              <div class="we-control-group">
                <label>Left: Size </label>
                <input data-target="borderLeftWidth" type="number" min="0" id="we-bl-sc" class="we-control" />
              </div>
              <div class="we-control-group we-select-group">
                <label>Style</label>
                <select data-target="borderLeftStyle" id="we-bl-ct" class="we-control">
                  <option value="none">None</option>
                  <option value="solid">Solid</option>
                  <option value="dotted">Dotted</option>
                  <option value="dashed">Dashed</option>
                  <option value="double">Double</option>
                  <option value="groove">Groove</option>
                  <option value="ridge">Ridge</option>
                  <option value="inset">Inset</option>
                  <option value="outset">Outset</option>
                </select>
              </div>
              <div class="we-control-group we-color-group">
                <label>Color</label>
                <button class="we-clr-btn" id="we-bl-cc"></button>
              </div>
            </div>

            <div class="we-hr-from active">
              <div class="we-control-group">
                <label>Right: Size </label>
                <input data-target="borderRightWidth" type="number" min="0" id="we-br-sc" class="we-control" />
              </div>
              <div class="we-control-group we-select-group">
                <label>Style</label>
                <select data-target="borderRightStyle" id="we-br-ct" class="we-control">
                  <option value="none">None</option>
                  <option value="solid">Solid</option>
                  <option value="dotted">Dotted</option>
                  <option value="dashed">Dashed</option>
                  <option value="double">Double</option>
                  <option value="groove">Groove</option>
                  <option value="ridge">Ridge</option>
                  <option value="inset">Inset</option>
                  <option value="outset">Outset</option>
                </select>
              </div>
              <div class="we-control-group we-color-group">
                <label>Color</label>
                <button class="we-clr-btn" id="we-br-cc"></button>
              </div>
            </div>

            <div class="we-hr-from active">
              <div class="we-control-group">
                <label>Bottom: Size </label>
                <input data-target="borderBottomWidth" type="number" min="0" id="we-bb-sc" class="we-control" />
              </div>
              <div class="we-control-group we-select-group">
                <label>Style</label>
                <select data-target="borderBottomStyle" id="we-bb-ct" class="we-control">
                  <option value="none">None</option>
                  <option value="solid">Solid</option>
                  <option value="dotted">Dotted</option>
                  <option value="dashed">Dashed</option>
                  <option value="double">Double</option>
                  <option value="groove">Groove</option>
                  <option value="ridge">Ridge</option>
                  <option value="inset">Inset</option>
                  <option value="outset">Outset</option>
                </select>
              </div>
              <div class="we-control-group we-color-group">
                <label>Color</label>
                <button class="we-clr-btn" id="we-bb-cc"></button>
              </div>
            </div>

          </div>

        </div>

        <!--  -->
        <button title="Unlink controls" class="we-btn we-btn-chain" id="toggleBorderLink"><i class="we-ico-link"></i></button>

      </div>

      <div id="we-border-radius">
        <label class="we-control-lable">Border Radius</label>
        <div id="we-border-radius-form" class="we-hr-from we-space-less-form">
          <div class="we-control-group">
            <input data-prop="tl" data-link="borderRadius" min="0" type="number" id="we-radius-tl" class="we-control" />
          </div>
          <div class="we-control-group">
            <input data-prop="tr" data-link="borderRadius" min="0" type="number" id="we-radius-tr" class=" we-control" />
          </div>
          <div class="we-control-group">
            <input data-prop="br" data-link="borderRadius" min="0" type="number" id="we-radius-br" class="we-control" />
          </div>
          <div class="we-control-group">
            <input data-prop="bl" data-link="borderRadius" min="0" type="number" id="we-radius-bl" class="we-control" />
          </div>
          <button title="Unlink controls" id="toggleBorderRadius" class="we-btn we-btn-chain"><i class="we-ico-link"></i></button>
        </div>
      </div>

      <div id="we-box-shadow">
        <h4 class="we-h4">Box Shadow</h4>
        <div class="we-hr-from">
          <div class="we-control-group we-color-group">
            <label>Color</label>
            <button class="we-clr-btn" id="we-bxsdc"></button>
          </div>
          <div class="we-control-group">
            <label>Horizontal</label>
            <input type="number" id="we-bxsh-x" class="we-control" />
          </div>
          <div class="we-control-group">
            <label>Vertical</label>
            <input type="number" id="we-bxsh-y" class="we-control" />
          </div>
          <div class="we-control-group">
            <label>Blur</label>
            <input type="number" min="0" id="we-bxsh-blr" class="we-control" />
          </div>
          <div class="we-control-group">
            <label>Position</label>
            <select data-target="backgroundRepeat" id="we-bxsh-pos" class="we-control">
              <option value="">Outline</option>
              <option value="inset">Inset</option>
            </select>
          </div>

        </div>
      </div>

    </div>

    <div id="we-background">
      <h4 class="we-h4">Background</h4>

      <div class="we-hr-from">
        <div class="we-control-group we-color-group">
          <label>Color</label>
          <button class="we-clr-btn" id="we-bgcc"></button>
        </div>
      </div>

      <div class="we-tab-nav">
        <button data-tabpane="#we-tab-pan-bg" id="we-tab-btn-bg" class="we-btn we-tab-btn active">Image</button>
        <button data-tabpane="#we-tab-pan-grd" id="we-tab-btn-grd" class="we-btn we-tab-btn">Gradient</button>
      </div>
      <div class="we-tab-container">
        <div id="we-tab-pan-bg" class="we-tab-pan active">
          
          <div id="we-bg-img-holder">
            <div id="we-background-img-wrapper">
              <input type="file" accept="image/x-png,image/gif,image/jpeg" id="we-bg-control" />
              <div id="we-bg-chooser">
                <span>Choose Image..</span>
              </div>
              <button id="we-bg-remove">&times;</button>
            </div>
          </div>

          <div class="we-hr-from">
            <div class="we-control-group">
              <label>Background Image URL</label>
              <input type="text" placeholder="Enter image URL" id="we-bg-url" class="we-control" />
            </div>
          </div>
        </div>
        <div id="we-tab-pan-grd" class="we-tab-pan">

          <div id="we-grd-bg-showcase"></div>

          <div id="we-grd-container">
            <div class="we-hr-from grd-props">
              <div class="we-control-group">
                <label>Gradient Type</label>
                <select id="grd-type" class="we-control">
                  <option value="linear-gradient">Linear</option>
                  <option value="radial-gradient">Radial</option>
                </select>
              </div>
              <div class="we-control-group" id="grd-angle">
                <label>Angle</label>
                <div class="we-flex">
                  <input type="range" min="0" max="360" value="90" id="we-angle-range" class="we-control" />
                  <input type="number" min="0" max="360" value="90" id="we-angle-numb" class="we-control" />
                </div>

              </div>
            </div>
            <div id="grd-clr-box">
            </div>
            <div class="grd-clr-action">
              <button class="we-btn we-btn-circle" id="add-grd-btn">+</button>
            </div>
          </div>

        </div>
      </div>

      <div id="we-bg-prop">
        <div class="we-hr-from">
          <div class="we-control-group">
            <label>Postion X</label>
            <input data-target="backgroundPositionX" type="number" id="we-bgxc" class="we-control" />
          </div>

          <div class="we-control-group">
            <label>Postion Y</label>
            <input data-target="backgroundPositionY" type="number" id="we-bgyc" class="we-control" />
          </div>

          <div class="we-control-group we-select-group">
            <label>Repeat</label>
            <select data-target="backgroundRepeat" id="we-bgrc" class="we-control">
              <option value="repeat">Repeat</option>
              <option value="repeat-x">Repeat-x</option>
              <option value="repeat-y">Repeat-y</option>
              <option value="no-repeat">No-repeat</option>
              <option value="space">Space</option>
              <option value="round">Roundt</option>
            </select>
          </div>

          <div class="we-control-group we-select-group">
            <label>Attchment</label>
            <select data-target="backgroundAttachment" id="we-bgac" class="we-control">
              <option value="initial">Initial</option>
              <option value="scroll">Scroll</option>
              <option value="fixed">Fixed</option>
              <option value="local">Local</option>
            </select>
          </div>
        </div>

        <div class="we-hr-from">
          <div class="we-control-group we-select-group">
            <label>Size</label>
            <select id="we-bgszsc" class="we-control">
              <option value="initial">Initial</option>
              <option value="auto">auto</option>
              <option value="cover">cover</option>
              <option value="contain">contain</option>
              <option value="custom">custom</option>
            </select>
          </div>

          <div id="we-c-bg-grp">
            <div class="we-control-group">
              <label>Height</label>
              <input type="number" min="0" id="we-bgszhc" class="we-control" />
            </div>

            <div class="we-control-group">
              <label>Width</label>
              <input type="number" min="0" id="we-bgszwc" class="we-control" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--/. Eidtor Pane -->

    <!-- Properties Pane -->
    <div id="we-properties-pane" class="main-tab-pane">
      <div class="we-tab-collection">
        <div class="we-tab-nav">
          <button data-tab="we-color-pane"   class="we-btn-tab we-tab-btn we-btn active">Colors</button>
          <button data-tab="we-image-pane"   class="we-btn-tab we-tab-btn we-btn">Images</button>
        </div>

        <div class="we-tab-container">
          <!-- Colors Pane -->
          <div id="we-color-pane" class="we-tab-pane active">
            <ul id="we-color-palette"></ul>
          </div>
          <!--/. Colors Pane -->
      
          <!-- Image Pane -->
          <div id="we-image-pane" class="we-tab-pane">
            <div id="we-img-grid"></div>
          </div>
          <!--/. Image Pane -->
        </div>
      </div>
    </div>
    <!--/. Properties Pane -->




    <!-- CSS Pane -->
    <div id="we-css-pane" class="main-tab-pane">
      <div id="we-css-save">
        <div id="we-toggle-box">
          <span>Keep Change </span>
          <div class="toggle">
            <input type="checkbox" id="we-store-css">
            <label></label>
          </div>
        </div>
        <p>Changes will be saved locally in brower. It wil be lost once you reset the browser</p>
      </div>
      <h4 id="we-css-title"></h4>
      <ul id="we-css-note" contenteditable="true"></ul>
      <button class="we-btn we-btn-outline" id="we-el-css" style="display: none">Element CSS</button>
      <button class="we-btn we-btn-outline" id="we-full-css">Full WE Stylesheet</button>
    </div>
    <!--/. CSS Pane -->
  </div>
  <div id="we-footer">
    <div id="we-foot-nav">
      <button data-tab="we-editor-pane" class="we-foot-nav-btn active">Editor</button>
      <button data-tab="we-properties-pane" class="we-foot-nav-btn">Properties</button>
      <button data-tab="we-css-pane" class="we-foot-nav-btn">CSS</button>
    </div>
    <div id="we-resizer"></div>
  </div>

 `;

  document.body.appendChild(WEAPP);
  // Css storage assign
  $id('we-store-css').checked  = isStoreCss;
  // Assign events
  const weAppEl = document.getElementById('we-app-window');
  dragWeApp(weAppEl);
  resizeWeApp(document.querySelector("#we-resizer"));

  // Assign Window Size
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  // font assign 
  let font = new FontFace("DM Sans", "url('https://fonts.gstatic.com/s/dmsans/v6/rP2Hp2ywxg089UriCZ2IHSeH.woff2')");
  document.fonts.add(font);

  // Show website used colors and images
  createWebsiteColorPalette();
  createWebsiteImgGrid();
}


// Brower Window resize Postion managment

window.addEventListener('resize', e => {
  const weAppEl = document.getElementById('we-app-window');
  if(weAppEl){
    // Assign window size
    const gap = 10;
    let x = parseInt(weAppEl.offsetLeft) - (windowWidth - window.innerWidth);  
    let y = parseInt(weAppEl.offsetTop) - (windowHeight - window.innerHeight);

    let weLeft = x <= gap? gap: windowWidth >= (x + weAppEl.offsetWidth)? x: parseInt(weAppEl.style.left);
    let weTop = y <= gap? gap: windowHeight >= (y + weAppEl.offsetHeight)? parseInt(weAppEl.style.top): y;

    weAppEl.style.top =  weTop + "px";
    weAppEl.style.left = weLeft + "px";

    // Assign window size
    windowWidth = window.innerWidth;  
    windowHeight = window.innerHeight;
  }
 })



/**
 * Make WE APP portable on webpages
 * **/ 

function dragWeApp(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById('we-app-header')) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById('we-app-header').onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}




/**
 * Resize
 * */ 

function resizeWeApp(el) {
  let y = 0;
  let appBodyHeight = 0;
  const appBody = document.getElementById("we-app-body");

  el.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    y = e.clientY;
    appBodyHeight = appBody.getBoundingClientRect().height;

    // get the mouse cursor position at startup:
    document.addEventListener("mouseup", mouseUpHandler);
    document.addEventListener("mousemove", mouseMoveHandler);
  }

  function mouseMoveHandler(e) {
    e = e || window.event;
    e.preventDefault();
    const dy = e.clientY - y;
    const newHeight = appBodyHeight + dy;
    appBody.style.height = `${newHeight}px`;
  }

  function mouseUpHandler() {
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  }
}




// Main Tab switch
function mainTabSwitch(e){
  const tabTarget = e.target.dataset.tab;
  $qs('.we-foot-nav-btn.active').classList.remove('active');
  $qs('.main-tab-pane.active').classList.remove('active');
  e.target.classList.add('active');
  $id(tabTarget).classList.add('active');
  // Chcek if css tab opened
  if(tabTarget === 'we-css-pane'){
    generateWeElCss();
  }
}

/**
 * Create website used colors Palette
 * */ 
function createWebsiteColorPalette() {
  let colorPalette = '';
  websiteColors.forEach((color) => {
    colorPalette += `<li style="background-color: ${color}; color: ${invertColor(color)}">
      <span class="color-code"> ${rgba2hex(color)} </span>
      <button title="Copy color" data-color="${rgba2hex(color)}" class="we-copy-color"></button>
    </li>`;
  })
  
  $id('we-color-palette').innerHTML = colorPalette;
  // Copy to clipboard
  document.querySelectorAll('.we-copy-color').forEach(copyBtn => {
    copyBtn.addEventListener('click', (e) => {
      const tempInput = document.createElement('textarea');
      tempInput.value = copyBtn.dataset.color;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
    });
  });
}

/**
 * Create website used Image Grid
 * */ 
function createWebsiteImgGrid() {
  let imgGrid = '';
  websiteImages.forEach((imgSrc) => {
    imgGrid += `<div class="we-img-cl">
      <img src='${imgSrc}'>
      <div class="we-img-overlay">
        <a href='${imgSrc}' download title="download" class="we-img-download">
          <i class="we-ico-download"></i>
        </a>
      </div>
    </div>`;
  })
  
  $id('we-img-grid').innerHTML = imgGrid;
}
