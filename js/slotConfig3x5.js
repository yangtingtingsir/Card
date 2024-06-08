// 3x5 243 lines
var slotConfig3x5 = {
    slotTextColor : 0x822287,       // text color

    symbolSizeY: 228,
    spinTime: 2000,                 // time, milliseconds
    winShowTime: 3000,              // time, milliseconds
    showWinCoinsMessage : false,    // displaying a message with the amount of money won
    winMessageTime: 2000,           // win message show time

    symbAnimFrameRate: 24,      // symbols animation frame rate
    frameWidth : 259,           // frame width
    frameHeight : 224,          // frame height

    lineColor : 0xFFEA31,       // line color

    lineBetMaxValue: 20,        // slot line bet maxvalue
    useWild: true,              // use wild flag, wild can be substitute for any symbol to create winning combinations (exclude first reel)
    wild: 'Wild',               // wild symbol name
    useScatter: true,           // use scatter flag
    scatter: 'Scatter',         // scatter symbol name
    selectedLines: 'all',       //'all' / 'first' - selectad lines at start

    useWildInFirstPosition: false,              // substitute of the first symbol not allowed
    useLineBetMultiplier: true,                 // win multiplied by bet
    useLineBetFreeSpinMultiplier: false,        // free spins win multiplied by bet
    defaultCoins: 100000,                       // default player credit 100 000

    localOffsetX: 0,                            // x offset from center for all scene objects
    localOffsetY: 70,                           // y offset from center for all scene objects

    
    fonts: [
        {
            fontName: 'gameFont_0',
            filePNG:  'fonts/lilitaone_48_0.png',
            fileXML:  'fonts/lilitaone_48_0.xml'
        },
        {
            fontName: 'gameFont_1',
            filePNG:  'fonts/lilitaone_48_1.png',
            fileXML:  'fonts/lilitaone_48_1.xml'
        },
    ],

    sprites: [
        // common sprites 
        {
            fileName: 'SlotMachine_3x5.png',
            name: 'slot'
        },
        {
            fileName: 'ReelMaskTop_3x5.png',
            name: 'slotmasktop'
        },
        {
            fileName: 'ReelMaskBottom_3x5.png',
            name: 'slotmaskbottom'
        },
        {
            fileName: 'HeartIcon.png',
            name: 'hearticon'
        },
        {
            fileName: 'ReelShelf_3x5.png',
            name: 'reelshelf'
        },
        {
            fileName: 'TextPlate.png',
            name: 'textplate'
        },
        {
            fileName: 'ButtonPlus.png',
            name: 'button_plus'
        },
        {
            fileName: 'ButtonPlusHover.png',
            name: 'button_plus_hover'
        },
        {
            fileName: 'ButtonMinus.png',
            name: 'button_minus'
        },
        {
            fileName: 'ButtonMinusHover.png',
            name: 'button_minus_hover'
        },
        {
            fileName: 'PanelTotalBet.png',
            name: 'panel_totalbet'
        },
        {
            fileName: 'PanelWin.png',
            name: 'panel_win'
        },
        {
            fileName: 'PanelLines.png',
            name: 'panel_lines'
        },
        {
            fileName: 'PanelBalance.png',
            name: 'panel_balance'
        },
        {
            fileName: 'ButtonMaxBet.png',
            name: 'button_maxbet'
        },
        {
            fileName: 'ButtonMaxBetHover.png',
            name: 'button_maxbet_hover'
        },
        {
            fileName: 'ButtonSpin.png',
            name: 'button_spin'
        },
        {
            fileName: 'ButtonSpinHover.png',
            name: 'button_spin_hover'
        },
        {
            fileName: 'ButtonAutoSpin.png',
            name: 'button_autospin'
        },
        {
            fileName: 'ButtonAutoSpinHover.png',
            name: 'button_autospin_hover'
        },
        // common gui sprites 
        {
            fileName: 'ButtonMenu.png',
            name: 'button_menu'
        },
        {
            fileName: 'ButtonMenuHover.png',
            name: 'button_menu_hover'
        },
        {
            fileName: 'ButtonInfo.png',
            name: 'button_info'
        },
        {
            fileName: 'ButtonInfoHover.png',
            name: 'button_info_hover'
        },
        {
            fileName: 'ButtonSettings.png',
            name: 'button_settings'
        },
        {
            fileName: 'ButtonSettingsHover.png',
            name: 'button_settings_hover'
        },
        {
            fileName: 'ButtonRules.png',
            name: 'button_rules'
        },
        {
            fileName: 'ButtonRulesHover.png',
            name: 'button_rules_hover'
        },
        {
            fileName: 'gui/ButtonOn.png',
            name: 'button_on'
        },
        {
            fileName: 'gui/ButtonOff.png',
            name: 'button_off'
        },
        {
            fileName: 'gui/MessagePanel.png',
            name: 'message_panel'
        },   
        {
            fileName: 'gui/AboutPanel.png',
            name: 'about_panel'
        }, 
        {
            fileName: 'gui/SettingsPanel.png',
            name: 'settings_panel'
        }, 
        {
            fileName: 'gui/FreeSpinPanel.png',
            name: 'freespin_panel'
        }, 
        {
            fileName: 'gui/BigWinPanel.png',
            name: 'bigwin_panel'
        },  
        {
            fileName: 'gui/HugeWinPanel.png',
            name: 'hugewin_panel'
        }, 
        {
            fileName: 'gui/MegaWinPanel.png',
            name: 'megawin_panel'
        }, 
        {
            fileName: 'gui/Logo.png',
            name: 'logo'
        }, 
        {
            fileName: 'gui/ExitButton.png',
            name: 'exit_button'
        }, 
        {
            fileName: 'gui/ExitButtonHover.png',
            name: 'exit_button_hover'
        },   
        {
            fileName: 'gui/MiddleButton.png', 
            name: 'middle_button'
        }, 
        {
            fileName: 'gui/MiddleButtonHover.png', 
            name: 'middle_button_hover'
        },   
        {
            fileName: 'gui/LongButton.png', 
            name: 'long_button'
        }, 
        {
            fileName: 'gui/LongButtonHover.png', 
            name: 'long_button_hover'
        }, 
        {
            fileName: 'gui/ExtraLongButton.png', 
            name: 'extralong_button'
        }, 
        {
            fileName: 'gui/ExtraLongButtonHover.png', 
            name: 'extralong_button_hover'
        },
        {
            fileName: 'gui/InfoPanel.png', 
            name: 'info_panel'
        },  
        {
            fileName: 'gui/JackpotWinPanel.png', 
            name: 'jackpotwin_panel'
        },   
        {
            fileName: 'gui/popUpBkg.png', 
            name: 'pu_background'
        },   
        {
            fileName: 'gui/NextButtonHover.png', 
            name: 'next_button_hover'
        },
        {
            fileName: 'gui/NextButton.png', 
            name: 'next_button'
        },  
        {
            fileName: 'gui/PrevButtonHover.png', 
            name: 'prev_button_hover'
        },   
        {
            fileName: 'gui/PrevButton.png', 
            name: 'prev_button'
        },     
        {
            fileName: null, 
            name: 'symbol_plate'
        },   
        {
            fileName: null, 
            name: 'specsymbol_plate'
        },   
        {
            fileName: null, 
            name: 'navi_dot'
        },    
        {
            fileName: null, 
            name: 'navi_dot_active'
        },    
    ],

    symbols:
    [
        {
            fileName: 'BouquetAstra.png',                       // filename or null
            name: 'BouquetAstra',                               // sprite name
            fileNameBlurred: 'BouquetAstraBlurred.png',         // blurry symbol file name, folder png/SymbolsBlurred
            animation: 'BouquetAstraSheet.png',                 // animation sheet file name, folder png/SymbolsSheet
            useWildSubstitute: true                             // use wild substitute for the symbol
        },
        {
            fileName: 'BouquetKala.png',           
            name: 'BouquetKala',                   
            fileNameBlurred: 'BouquetKalaBlurred.png', 
            animation: 'BouquetKalaSheet.png',
            useWildSubstitute: true
        },
        {
            fileName: 'BouquetLily.png',           
            name: 'BouquetLily',                   
            fileNameBlurred: 'BouquetLilyBlurred.png', 
            animation: 'BouquetLilySheet.png',
            useWildSubstitute: true
        },
        {
            fileName: 'CookieSpade.png',          
            name: 'CookieSpade',                   
            fileNameBlurred: 'CookieSpadeBlurred.png', 
            animation: 'CookieSpadeSheet.png',
            useWildSubstitute: true
        },
        {
            fileName: 'BouquetRose.png',          
            name: 'BouquetRose',                   
            fileNameBlurred: 'BouquetRoseBlurred.png', 
            animation: 'BouquetRoseSheet.png',
            useWildSubstitute: true
        },
        {
            fileName: 'CookieClub.png',          
            name: 'CookieClub',                   
            fileNameBlurred: 'CookieClubBlurred.png', 
            animation: 'CookieClubSheet.png',
            useWildSubstitute: true
        },
        {
            fileName: 'CookieHeart.png',          
            name: 'CookieHeart',                   
            fileNameBlurred: 'CookieHeartBlurred.png', 
            animation: 'CookieHeartSheet.png',
            useWildSubstitute: true
        },
        {
            fileName: 'CookieDiamond.png',          
            name: 'CookieDiamond',                   
            fileNameBlurred: 'CookieDiamondBlurred.png', 
            animation: 'CookieDiamondSheet.png',
            useWildSubstitute: true
        },
        {
            fileName: 'Wild.png',          
            name: 'Wild',                   
            fileNameBlurred: 'WildBlurred.png', 
            animation: 'WildSheet.png',
            useWildSubstitute: false
        },
        {
            fileName: 'Scatter.png',          
            name: 'Scatter',                   
            fileNameBlurred: 'ScatterBlurred.png', 
            animation: 'ScatterSheet.png',
            useWildSubstitute: false
        },
    ],

    reels:[
        {//0

            symbolImages: ['BouquetLily', 'BouquetRose', 'CookieClub', 'BouquetRose', 'CookieDiamond', 'BouquetAstra', 'BouquetKala', 'CookieHeart', 'CookieSpade', 'BouquetAstra'],                            // BouquetKala
            offsetX: -458,
            offsetY: -100,
            windowImage: 'reel',    // not used
            windowsCount: 3,    
            addSpinTime: 0, // additional spin time for reel milliseconds   
        },
        {//1

            symbolImages: ['BouquetRose', 'BouquetAstra', 'Wild', 'BouquetLily','CookieDiamond', 'BouquetRose', 'CookieClub', 'BouquetAstra', 'CookieHeart','CookieSpade', 'BouquetKala', 'BouquetAstra'],         // 12 CookieClub 'Wild', -> CookieClub BouquetAstra
            offsetX: -239,
            offsetY: -100,
            windowImage: 'reel',        // not used
            windowsCount: 3,    
            addSpinTime: 100, // additional spin time for reel milliseconds   
        },
        { // 2
            symbolImages: ['BouquetRose', 'Wild', 'CookieHeart', 'BouquetLily', 'CookieDiamond', 'BouquetAstra', 'BouquetRose', 'CookieClub', 'Wild', 'Scatter', 'Wild', 'CookieSpade', 'BouquetKala'],   // 13
            offsetX: 0,
            offsetY: -100,
            windowImage: 'reel',        // not used
            windowsCount: 3,
            addSpinTime: 200, // additional spin time for reel milliseconds   
        },
        { // 3
            symbolImages: ['BouquetLily', 'BouquetRose', 'Wild', 'CookieClub', 'CookieDiamond', 'BouquetRose',  'CookieHeart', 'Wild', 'CookieSpade', 'Wild', 'Scatter', 'BouquetAstra', 'Scatter',  'BouquetKala'],   // 14
            offsetX: 239,
            offsetY: -100,
            windowImage: 'reel',        // not used
            windowsCount: 3,
            addSpinTime: 300, // additional spin time for reel milliseconds     
        },
        { // 4
            symbolImages: ['BouquetAstra', 'Wild', 'BouquetRose', 'BouquetLily', 'BouquetRose', 'CookieClub', 'Wild', 'CookieDiamond', 'Wild', 'CookieSpade', 'Scatter', 'CookieHeart', 'Scatter' , 'BouquetKala'],   // 14
            offsetX: 458,
            offsetY: -100,
            windowImage: 'reel',        // not used
            windowsCount: 3,
            addSpinTime: 400, // additional spin time for reel milliseconds     
        }
    ],

    // reels_simulate: [0, 0, -1, -1, -1],      // -1 - avoid reel simulate
    // reels_simulate: [0, 0, 9, 10, 10],       // scatter win
    // reels_simulate: [0, 2, 8, 7, 6],         // jackpot win

    payLines:[
        {
            line: ['BouquetAstra', 'BouquetAstra', 'BouquetAstra', 'BouquetAstra', 'BouquetAstra'],
            pay: 3,
            freeSpins: 0
        },
        {
            line: ['BouquetAstra', 'BouquetAstra', 'BouquetAstra', 'BouquetAstra', 'any'],
            pay: 2,
            freeSpins: 0
        },
        {
            line: ['BouquetAstra', 'BouquetAstra', 'BouquetAstra', 'any', 'any'],
            pay: 1,
            freeSpins: 0
        },
        {
            line: ['BouquetKala', 'BouquetKala', 'BouquetKala', 'BouquetKala', 'BouquetKala'],
            pay: 5,
            freeSpins: 0
        },
        {
            line: ['BouquetKala', 'BouquetKala', 'BouquetKala', 'BouquetKala', 'any'],
            pay: 3,
            freeSpins: 0
        },
        {
            line: ['BouquetKala', 'BouquetKala', 'BouquetKala', 'any', 'any'],
            pay: 1,
            freeSpins: 0
        },
        {
            line: ['BouquetLily', 'BouquetLily', 'BouquetLily', 'BouquetLily', 'BouquetLily'],
            pay: 6,
            freeSpins: 0
        },
        {
            line: ['BouquetLily', 'BouquetLily', 'BouquetLily', 'BouquetLily', 'any'],
            pay: 3,
            freeSpins: 0
        },
        {
            line: ['BouquetLily', 'BouquetLily', 'BouquetLily', 'any', 'any'],
            pay: 2,
            freeSpins: 0
        },
        {
            line: ['BouquetRose', 'BouquetRose', 'BouquetRose', 'BouquetRose', 'BouquetRose'],
            pay: 7,
            freeSpins: 0
        },
        {
            line: ['BouquetRose', 'BouquetRose', 'BouquetRose', 'BouquetRose', 'any'],
            pay: 3,
            freeSpins: 0
        },
        {
            line: ['BouquetRose', 'BouquetRose', 'BouquetRose', 'any', 'any'],
            pay: 2,
            freeSpins: 0
        },
        {
            line: ['CookieClub', 'CookieClub', 'CookieClub', 'CookieClub', 'CookieClub'],
            pay: 17,
            freeSpins: 0
        },
        {
            line: ['CookieClub', 'CookieClub', 'CookieClub', 'CookieClub', 'any'],
            pay: 13,
            freeSpins: 0
        },
        {
            line: ['CookieClub', 'CookieClub', 'CookieClub', 'any', 'any'],
            pay: 11,
            freeSpins: 0
        },
        {
            line: ['CookieDiamond', 'CookieDiamond', 'CookieDiamond', 'CookieDiamond', 'CookieDiamond'],
            pay: 19,
            freeSpins: 0
        },
        {
            line: ['CookieDiamond', 'CookieDiamond', 'CookieDiamond', 'CookieDiamond', 'any'],
            pay: 13,
            freeSpins: 0
        },
        {
            line: ['CookieDiamond', 'CookieDiamond', 'CookieDiamond', 'any', 'any'],
            pay: 11,
            freeSpins: 0
        },
        {
            line: ['CookieHeart', 'CookieHeart', 'CookieHeart', 'CookieHeart', 'CookieHeart'],
            pay: 20,
            freeSpins: 0
        },
        {
            line: ['CookieHeart', 'CookieHeart', 'CookieHeart', 'CookieHeart', 'any'],
            pay: 14,
            freeSpins: 0
        },
        {
            line: ['CookieHeart', 'CookieHeart', 'CookieHeart', 'any', 'any'],
            pay: 11,
            freeSpins: 0
        },
        {
            line: ['CookieSpade', 'CookieSpade', 'CookieSpade', 'CookieSpade', 'CookieSpade'],
            pay: 25,
            freeSpins: 0
        },
        {
            line: ['CookieSpade', 'CookieSpade', 'CookieSpade', 'CookieSpade', 'any'],
            pay: 15,
            freeSpins: 0
        },
        {
            line: ['CookieSpade', 'CookieSpade', 'CookieSpade', 'any', 'any'],
            pay: 11,
            freeSpins: 0
        },
    ],
    
    scatterPayTable:[
        {
            scattersCount: 5,
            pay: 0,
            freeSpins: 5
        }
    ],
    
    // jackpot settings
    jackpot:
        {
            symbolName: 'Wild',
            symbolsCount: 7,
            defaultAmount: 1000,        // coins amout at start
            increaseValue: 1,           // jackpot increment after spin
        },

    createSlotGraphic: function(scene){
        // scene.background =  scene.addSpriteLocPos('background', 0, 0); //?.setScale(1.5);
        // scene.background.depth = -5;

        // lamps
        /*
            scene.lampsArray = []; 
            scene.leftLamp = new Lamp (scene, -366, -490);
            scene.rightLamp = new Lamp (scene, 366, -490);
            scene.rightLamp.lamp.setScale(-1, 1); // mirror right lamp
            scene.lampsArray.push(scene.leftLamp);
            scene.lampsArray.push(scene.rightLamp);
            scene.leftLamp.on();
            scene.rightLamp.on();
        */
       
         scene.slot =  scene.addSpriteLocPos('slot', 0, 0 - 100); 
         scene.slot.depth = -1;

         scene.slotmasktop =  scene.addSpriteLocPos('slotmasktop', 0, -380 - 100); 
         scene.reelshelf_1 = scene.addSpriteLocPos('reelshelf', 0, -113-100); 
         scene.reelshelf_2 = scene.addSpriteLocPos('reelshelf', 0, 115-100); 

         scene.slotmaskbottom =  scene.addSpriteLocPos('slotmaskbottom', 0, 340 - 100); 
    },

    createReels: function(scene) {
        var _reels = [];
        for(var ri = 0; ri < this.reels.length; ri++)
        {
            _reels.push(new Reel(scene, this.reels[ri], ri, this.symbolSizeY, this.reels[ri].windowsCount, true, this.spinTime, this.symbAnimFrameRate));
        }
        return _reels;
    },

    createControls: function(scene, slotControls) {
        let depth = 11;
        let textColor = this.slotTextColor;
        function staticText_1(positionX, positionY, iconOffsetX, text)
        {
            var textplate = scene.addSpriteLocPos('textplate', positionX , positionY); 
            textplate.setDepth(depth); 

            var hearticon_1 =  scene.addSpriteLocPos('hearticon', positionX - iconOffsetX , positionY); 
            hearticon_1.setDepth(depth); 
            var hearticon_2 = scene.addSpriteLocPos('hearticon', positionX + iconOffsetX , positionY); 
            hearticon_2.setDepth(depth); 

            var _text = scene.add.bitmapText(scene.centerX + positionX, scene.centerY + positionY, 'gameFont_0', text, 31, 1).setOrigin(0.5);
            _text.depth = depth;
            _text.tint = textColor;
        }

        function dynamicText_1(positionX, positionY, name, panelimage, text)
        {
            if(panelimage !== null) { var panel = scene.addSpriteLocPos(panelimage, positionX, positionY + 7); } // 7 - small vertical offset from text position
            slotControls[name] = scene.add.bitmapText(scene.centerX + positionX, scene.centerY + positionY, 'gameFont_1', text, 40, 1).setOrigin(0.5);
            slotControls[name].depth = depth;
        }

        function createButton_0(positionX, positionY, name, imageName, hoverImageName, isSwitch, isVisible, playClickSound, eventHahdler, eventContext)
        {
            slotControls[name] = new SceneButton(scene, imageName, hoverImageName, isSwitch);   
            slotControls.buttons.push(slotControls[name]);
            slotControls[name].create(positionX, positionY, 0.5, 0.5);
            slotControls[name].addClickEvent(eventHahdler, eventContext);
            if (playClickSound) slotControls[name].addClickEvent(()=>{ scene.soundController.playClip('button_click'); }, eventContext);
            slotControls[name].setDepth(depth); 
            slotControls[name].button.setVisible(isVisible); 
        }

        function createButton_1(positionX, positionY, name, imageName, isSwitch, isVisible, playClickSound, eventHahdler, eventContext)
        {
            createButton_0(positionX, positionY, name, imageName, imageName + '_hover', isSwitch, isVisible, playClickSound, eventHahdler, eventContext);
        }

        // totalbet minus button
        createButton_1(-360-90, 153 + 200, 'totalBetMinusButton', 'button_minus', false, true, true, slotControls.lineBetMinus_Click, slotControls);

        // totalbet plus button
        createButton_1(-360+90, 153 + 200, 'totalBetPlusButton', 'button_plus', false, true, true, slotControls.lineBetPlus_Click, slotControls);

        // maxbet button
        createButton_1(-125, 160 + 200, 'slotMaxBetButton', 'button_maxbet', false, true, true, slotControls.maxBet_Click, slotControls);
        
        // autoSpin button
        createButton_1(125, 160 + 200, 'slotAutoSpinButton', 'button_autospin', true, true, true, null, null);
        slotControls.changeAutoSpinModeEvent.add((autoSpin)=>
        {
            if (!autoSpin) { slotControls.slotAutoSpinButton.release(); }
        }, this);
       
        // spin button
        slotControls.slotSpinButton = new SpinButton(scene, 'button_spin', 'button_spin_hover', false);   
        slotControls.buttons.push(slotControls.slotSpinButton);
        slotControls.slotSpinButton.create(0, 160 + 200, 0.5, 0.5);    
        slotControls.slotSpinButton.clickEvent.add(scene.handleAnimation, scene);  
        slotControls.slotSpinButton.setDepth(depth); 

        // menu button
        createButton_1(860, -380, 'menuButton', 'button_menu', false, true, true, ()=>{ 
            slotControls.settingsButton.button.setVisible(!slotControls.settingsButton.button.visible);  
            slotControls.rulesButton.button.setVisible(!slotControls.rulesButton.button.visible); 
            slotControls.slotInfoButton.button.setVisible(!slotControls.slotInfoButton.button.visible); 
            }, this);
 
        // settings button
        createButton_1(860, -285, 'settingsButton', 'button_settings', false, false, true, ()=>{ 
            var pu = scene.guiController.showPopUp(this.createSettingsPUHandler);
            }, this);

        // rules button
        createButton_1(860, -190, 'rulesButton', 'button_rules', false, false, true, ()=>{
            var pu = scene.guiController.showPopUp(this.createInfoPUHandler);        
        }, this);

        // info button
        createButton_1(860, -95, 'slotInfoButton', 'button_info', false, false, true, ()=>{
            var pu = scene.guiController.showPopUp(this.createAboutPUHandler);         
        }, this);
 
        // sound button
        // createButton_0(-860, -300, 'soundButton', 'button_on', 'button_off', true, true, true, ()=>{scene.soundController.soundOn(!scene.soundController._soundOn);}, scene);
       
        // lines loop button
        // createButton_1(-360, 225, 'slotLinesLoopButton', 'button_lines', false, true, true, slotControls.linesLoop_Click, slotControls);

        // adding the text fields
        // slotControls.titleText = scene.add.bitmapText(scene.centerX, scene.centerY - 685 + 220, 'gameFont_1', 'SWEET HEARTS', 48, 1).setOrigin(0.5);
        // slotControls.titleText.depth = depth;

        staticText_1(-640, 87 + 200, 50, 'LINES');
        dynamicText_1(-640, 153 + 200, 'linesCountText', 'panel_lines', slotControls.selectedLinesCount);
         
        staticText_1(-360, 87 + 200, 80, 'TOTAL  BET');
        dynamicText_1(-360, 153 + 200, 'totalBetSumText', 'panel_totalbet', slotControls.getTotalBet());
 
        staticText_1(360, 87 + 200, 74, 'BALANCE');
        dynamicText_1(360, 153 + 200, 'creditSumText', 'panel_balance', '' + scene.slotPlayer.coins);
         
        staticText_1(640, 87 + 200, 84, 'YOUR  WIN');
        dynamicText_1(640, 153 + 200, 'winAmountText', 'panel_win', '0');
        
        slotControls.jackpotAmountText = scene.add.bitmapText(scene.centerX + 0, scene.centerY - 685 + 220, 'gameFont_1', '0', 48, 1).setOrigin(0.5);
        slotControls.jackpotAmountText.depth = depth;
        var textplatejp = scene.addSpriteLocPos('textplate',  0, - 770 + 220); 
        textplatejp.setDepth(depth); 
        slotControls.jackpotTitleText = scene.add.bitmapText(scene.centerX + 0, scene.centerY - 770 + 220, 'gameFont_1', 'Jackpot', 48, 1).setOrigin(0.5);
        slotControls.jackpotTitleText.depth = depth;

        slotControls.autoSpinText = scene.add.bitmapText(scene.centerX + 135, scene.centerY + 140 + 200, 'gameFont_1', 'AUTO', 31, 1).setOrigin(0.5);
        slotControls.autoSpinText.setLetterSpacing(-3);
        slotControls.autoSpinText.depth = depth;
        slotControls.autoSpinText1 = scene.add.bitmapText(scene.centerX + 135, scene.centerY + 167 + 200, 'gameFont_1', 'SPIN', 31, 1).setOrigin(0.5);
        slotControls.autoSpinText1.depth = depth;

        slotControls.maxBetText = scene.add.bitmapText(scene.centerX - 135, scene.centerY + 140 + 200, 'gameFont_1', 'MAX', 31, 1).setOrigin(0.5);
        slotControls.maxBetText.setLetterSpacing(-4);
        slotControls.maxBetText.depth = depth;
        slotControls.maxBetText1 = scene.add.bitmapText(scene.centerX - 135, scene.centerY + 167 + 200, 'gameFont_1', 'BET', 31, 1).setOrigin(0.5);
        slotControls.maxBetText1.setLetterSpacing(7);
        slotControls.maxBetText1.depth = depth;
        
        slotControls.spinText = scene.add.bitmapText(scene.centerX - 0, scene.centerY + 145 + 200, 'gameFont_1', 'SPIN', 53, 1).setOrigin(0.5);
        slotControls.spinText.depth = depth;

        slotControls.infoText = scene.add.bitmapText(scene.centerX, scene.centerY + 400 + 200, 'gameFont_0', 'info', 30, 1).setOrigin(0.5);
        slotControls.infoText.tint = this.slotTextColor;
        slotControls.infoText.setVisible(false);
        slotControls.infoText.depth = depth;

        slotControls.lineBetAmountText = scene.add.bitmapText(scene.centerX - 420, scene.centerY + 210 + 220, 'gameFont_1', slotControls.lineBet, 96, 1).setOrigin(0.5);
        slotControls.lineBetAmountText.setVisible(false);
        slotControls.lineBetAmountText.depth = depth;

        slotControls.freeSpinCountText = scene.add.bitmapText(scene.centerX, scene.centerY + 360 + 200, 'gameFont_1', '9999', 30, 1).setOrigin(0.5);
        slotControls.freeSpinCountText.tint = this.slotTextColor;
        slotControls.freeSpinCountText.setVisible(false);
        slotControls.freeSpinCountText.depth = depth;
    },

    createInfoPUHandler: function(popup)
    {
        var textColor = 0x822287;// this.slotTextColor;
        function createSymbolPlate5x (popup, parentContainer, symbSpriteName, posX, posY, price3x,price4x, price5x)
        {
            let symbContainer = popup.scene.add.container(posX, posY);
            parentContainer.add(symbContainer);
            let symbIcon = popup.scene.add.sprite(-140, 0, symbSpriteName).setOrigin(0.5).setScale(0.8);
            symbContainer.add(symbIcon);
    
            let textXPos = -20;
            let text3x = popup.scene.add.bitmapText(textXPos, 48, 'gameFont_0', '3X - ' + price3x, 40, 1).setOrigin(0, 0.5);
            text3x.tint = textColor;
            symbContainer.add(text3x);
    
            let text4x = popup.scene.add.bitmapText(textXPos, 0, 'gameFont_0', '4X - ' + price4x, 40, 1).setOrigin(0, 0.5);
            text4x.tint = textColor;
            symbContainer.add(text4x);

            let text5x = popup.scene.add.bitmapText(textXPos, -48, 'gameFont_0', '5X - ' + price5x, 40, 1).setOrigin(0, 0.5);
            text5x.tint = textColor;
            symbContainer.add(text5x);
        };

        function createSpecSymbolPlate(popup, parentContainer, symbSpriteName, posX, posY, info)
        {
            let symbContainer = popup.scene.add.container(posX, posY);
            parentContainer.add(symbContainer);
            let symbIcon = popup.scene.add.sprite(0, 0, symbSpriteName).setOrigin(0.5, 0.5).setScale(0.8);
            symbContainer.add(symbIcon);
    
            let textInfo = popup.scene.add.bitmapText(160, 0, 'gameFont_0', info, 31, 0).setOrigin(0, 0.5);
            textInfo.tint = textColor;
            symbContainer.add(textInfo);
        };
    
        function refreshInfoPu (containers, selectors, index)
        {
            for(let i = 0; i < containers.length; i++)
            {
                containers[i].visible = (index === i);
                if(popup.scene.textures.exists('navi_dot_active') && popup.scene.textures.exists('navi_dot'))
                {
                    selectors[i].setTexture((index === i) ? 'navi_dot_active' : 'navi_dot');
                }
            }
        };

        let index = 0;
        let containers = [];
        let selectors = [];
        let offsetY = -120;

        // add background and panel
        let backGround = popup.scene.add.sprite(0, 40 + offsetY, 'pu_background').setOrigin(0.5).setScale(1, 1.05);
        backGround.setInteractive(); // block bottom controls
        // backGround.setAlpha(0.05);
        // backGround.tint = 0x262a3a;
        popup.add(backGround);
        let panel = popup.scene.add.sprite(0, 0 + offsetY, 'info_panel').setOrigin(0.5);
        popup.add(panel);

        let title = popup.scene.add.bitmapText(0, -450, 'gameFont_1', 'PAYTABLE', 53, 1).setOrigin(0.5); // popup.scene.add.sprite(0, -330 + offsetY, 'help_title').setOrigin(0.5);
        popup.add(title);

        popup.addButton('exitButton','exit_button', 'exit_button_hover', false, 668, -317 + offsetY);
        popup.addButton('nextButton','next_button', 'next_button_hover', false, 80, 490 + offsetY);
        popup.addButton('prevButton','prev_button', 'prev_button_hover', false, -80, 490 + offsetY);
        popup['exitButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['nextButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['prevButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);

        popup['exitButton'].clickEvent.add(()=>{popup.scene.guiController.closePopUp(popup);});

        popup['nextButton'].clickEvent.add(()=>
        {
            if(index < containers.length - 1) index++;
            else index = 0;
            refreshInfoPu(containers, selectors, index);
        }, this);

        popup['prevButton'].clickEvent.add(()=>
        {
            if(index > 0) index--;
            else index = containers.length - 1;
            refreshInfoPu(containers, selectors, index);
        }, this);

        // create minor symbols panel
        let minorContainer = popup.scene.add.container(0, 0 + offsetY);
        containers.push(minorContainer);
        popup.add(minorContainer);
 
        let minorTitle = popup.scene.add.bitmapText(0, -210, 'gameFont_1', 'MINOR  SYMBOLS', 46, 1).setOrigin(0.5); // popup.scene.add.sprite(0, -330, 'minor_title').setOrigin(0.5); // image
        minorContainer.add(minorTitle);

        let row1Y = -40;
        let row2Y = row1Y + 250;
        let col1X = -170;
        let colDist = 430;
        let col2X = col1X + colDist;

        // minor row 1
        createSymbolPlate5x(popup, minorContainer, 'BouquetAstra', col1X, row1Y, 1, 2, 3); 
        createSymbolPlate5x(popup, minorContainer, 'BouquetLily', col2X, row1Y, 2, 3, 6); 

        // minor row 2
        createSymbolPlate5x(popup, minorContainer, 'BouquetRose', col1X, row2Y, 2, 3, 7); 
        createSymbolPlate5x(popup, minorContainer, 'BouquetKala', col2X, row2Y, 2, 3, 8);
        minorContainer.visible = false;

        // create major symbols panel
        let majorContainer = popup.scene.add.container(0, 0 + offsetY);
        containers.push(majorContainer);
        popup.add(majorContainer);
        let majorTitle = popup.scene.add.bitmapText(0, -210, 'gameFont_1', 'MAJOR  SYMBOLS', 46, 1).setOrigin(0.5); // popup.scene.add.sprite(0, -324, 'major_title').setOrigin(0.5); // image
        majorContainer.add(majorTitle);

        // major row 1
        createSymbolPlate5x(popup, majorContainer , 'CookieClub', col1X, row1Y, 11, 13, 17);
        createSymbolPlate5x(popup, majorContainer , 'CookieDiamond', col2X, row1Y, 11, 13, 19);

        // major row 2
        createSymbolPlate5x(popup, majorContainer , 'CookieHeart', col1X, row2Y, 11, 14, 20);
        createSymbolPlate5x(popup, majorContainer , 'CookieSpade', col2X, row2Y, 11, 15, 25);
        majorContainer.visible = false;

        // create special symbols panel
        let specialContainer = popup.scene.add.container(0, 0 + offsetY);
        containers.push(specialContainer);
        popup.add(specialContainer); 
        let specialTitle = popup.scene.add.bitmapText(0, -210, 'gameFont_1', 'SPECIAL  SYMBOLS', 46, 1).setOrigin(0.5); // popup.scene.add.sprite(0, -330, 'special_title').setOrigin(0.5); // image
        specialContainer.add(specialTitle);
    
        // special row 1
        createSpecSymbolPlate(popup, specialContainer, 'Wild', -280, row1Y, 'Wild can be used with any symbols \non the reels to create winning \ncombinations (exclude first reel).\nAny 7 wild symbols scattered \non the screen = Jackpot Win.');
        createSpecSymbolPlate(popup, specialContainer, 'Scatter', -280 , row2Y, 'Any 5 scatter on the screen \ngive the player  5 free spins.');
        // createSpecSymbolPlate(popup, specialContainer, 'Jackpot', -350 , 225, 'Any 6 jackot symbols scattered \non the screen = Jackpot Win.');
        specialContainer.visible = false;

        // create rules panel
        let rulesContainer = popup.scene.add.container(0, 0 + offsetY);
        containers.push(rulesContainer);
        popup.add(rulesContainer);
        let rulesTitle = popup.scene.add.bitmapText(0, -210, 'gameFont_1', 'RULES', 46, 1).setOrigin(0.5); // popup.scene.add.sprite(0, -330, 'rules_title').setOrigin(0.5); // image
        rulesContainer.add(rulesTitle);

        let aboutTitle = popup.scene.add.bitmapText(-570, -130, 'gameFont_1', 'ABOUT  THE  GAME', 31, 0).setOrigin(0,0.5); // text
        rulesContainer.add(aboutTitle);
        let aboutText = popup.scene.add.bitmapText(-570, -90, 'gameFont_0',
        'Valentine slot is a pack of Slot Games with 3-5 reels and 243 paylines oriented from left to right. The \ngames have 9 regular symbols that win if three or more are lined up in sequence on a payline, \nbeginning from the leftmost position. The 4 high pay symbols and the 5 low pay symbols.', 31, 0).setOrigin(0, 0); // text
        rulesContainer.add(aboutText);
        aboutText.tint = textColor;

        let howTitle = popup.scene.add.bitmapText(-570, 130, 'gameFont_1', 'HOW  TO  PLAY', 31, 0).setOrigin(0,0.5); // text
        rulesContainer.add(howTitle);
        let howText = popup.scene.add.bitmapText(-570, 170, 'gameFont_0',
        '- Place your bet \n- Press the Spin button to start game \n- You can also use Max Bet button to auto bet \n- Press the AutoSpin button to turn Auto Spin game mode', 31, 0).setOrigin(0, 0); // text
        rulesContainer.add(howText);
        howText.tint = textColor;

        // create navi selectors
        let dotDist = 50;
        let offsetDots = dotDist * (containers.length - 1) / 2;
        if(popup.scene.textures.exists('navi_dot_active') && popup.scene.textures.exists('navi_dot'))
        {
            for(let i = 0; i < containers.length; i++)
            {
                var selector = popup.scene.add.sprite(-offsetDots + i * dotDist, 440 + offsetY, 'navi_dot').setOrigin(0.5);
                selectors.push(selector);
                popup.add(selector);
            }
        }
        refreshInfoPu(containers, selectors, index);
    },

    createAboutPUHandler: function(popup)
    {       
        let yOffset = -70;
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        // backGround.tint = 0x262a3a;
        // backGround.setAlpha(0.05);
        popup.add(backGround);
        let panel = popup.scene.add.sprite(0, 0 + yOffset, 'about_panel').setOrigin(0.5);
        popup.add(panel);

        // add title
        let title = popup.scene.add.bitmapText(0, -253 + yOffset, 'gameFont_1', 'ABOUT', 53, 1).setOrigin(0.5); // popup.scene.add.sprite(0, -255 + yOffset, 'about_title').setOrigin(0.5);
        popup.add(title);

        // add logo
        let logo = popup.scene.add.sprite(0, -35 + yOffset, 'logo').setOrigin(0.5);
        popup.add(logo);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, 115 + yOffset, 'gameFont_1', 'NEED HELP?', 31, 1).setOrigin(0.5);
        //popup.messageText.tint = 0x4f2930;
        popup.add(popup.messageText);

        // add buttons
        popup.addButton('supportButton','long_button', 'long_button_hover', false, 0, 205 + yOffset);
        popup.addButton('exitButton','exit_button', 'exit_button_hover', false, 250, -238  + yOffset);

        popup['supportButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['supportButton'].clickEvent.add(()=>{window.open("http://www.mkeystudio.com"); }, popup);
        
        popup['exitButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['exitButton'].clickEvent.add(()=>{popup.scene.guiController.closePopUp(popup);});

        // add support button text
        popup.supText = popup.scene.add.bitmapText(0, 198 + yOffset, 'gameFont_1', 'SUPPORT', 40, 1).setOrigin(0.5);
        popup.supText.tint = 0xFFFFFF;
        popup.add(popup.supText);
    },

    createSettingsPUHandler: function(popup)
    {    
        let yOffset = -70;   
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        // backGround.tint = 0x262a3a;
        // backGround.setAlpha(0.5);
        popup.add(backGround);
        let panel = popup.scene.add.sprite(0, 0 + yOffset, 'settings_panel').setOrigin(0.5);
        popup.add(panel);

        // add title
        let title =  popup.scene.add.bitmapText(0, -240 + yOffset, 'gameFont_1', 'SETTINGS', 53, 1).setOrigin(0.5); // popup.scene.add.sprite(0, -265 + yOffset, 'settings_title').setOrigin(0.5);
        popup.add(title);

        // sound and music text
        popup.soundText = popup.scene.add.bitmapText(-100, -125 + yOffset, 'gameFont_1', 'SOUNDS', 31, 1).setOrigin(0.5);
        //popup.soundText.tint = 0x4f2930;
        popup.add(popup.soundText);

        popup.musicText = popup.scene.add.bitmapText(100, -125 + yOffset, 'gameFont_1', 'MUSIC', 31, 1).setOrigin(0.5);
        //popup.musicText.tint = 0x4f2930;
        popup.add(popup.musicText);

        // sound and music buttons
        popup.addButton('soundButton','button_on', 'button_off', true, -100, -35 + yOffset);
        popup.addButton('musicButton','button_on', 'button_off', true, 100, -35 + yOffset);

        popup['soundButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['soundButton'].clickEvent.add(()=>{popup.scene.soundController.soundOn(!popup.scene.soundController._soundOn);}, popup);
        if(!popup.scene.soundController._soundOn) popup['soundButton'].setPressed();

        popup['musicButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['musicButton'].clickEvent.add(()=>{popup.scene.soundController.musicOn(!popup.scene.soundController._musicOn);}, popup);
        if(!popup.scene.soundController._musicOn) popup['musicButton'].setPressed();

        // privacy ant terms buttons
        popup.addButton('privacyButton','extralong_button', 'extralong_button_hover', false, 0, 95 + yOffset);
        popup.addButton('exitButton','exit_button', 'exit_button_hover', false, 282, - 221 + yOffset);
        popup.addButton('termsButton','extralong_button', 'extralong_button_hover', false, 0, 195 + yOffset);

        popup['privacyButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['privacyButton'].clickEvent.add(()=>{window.open("http://www.mkeystudio.com"); }, popup);
        
        popup['termsButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['termsButton'].clickEvent.add(()=>{window.open("http://www.mkeystudio.com"); }, popup);

        popup['exitButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['exitButton'].clickEvent.add(()=>{popup.scene.guiController.closePopUp(popup);});

        // privacy ant terms buttons text
        popup.privacyText = popup.scene.add.bitmapText(0, 88 + yOffset, 'gameFont_1', 'Privacy Policy', 40, 1).setOrigin(0.5);
        popup.privacyText.tint = 0xFFFFFF;
        popup.add(popup.privacyText);

        popup.termsText = popup.scene.add.bitmapText(0, 188 + yOffset, 'gameFont_1', 'Terms of use', 40, 1).setOrigin(0.5);
        popup.privacyText.tint = 0xFFFFFF;
        popup.add(popup.termsText);
    },

    createFreeGamesPUHandler: function(popup)
    {
        let yOffset = -70;   
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0 + yOffset, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        popup.add(backGround);
        // backGround.setAlpha(0.5);
        let panel = popup.scene.add.sprite(80, -100 + yOffset, 'freespin_panel').setOrigin(0.5);
        popup.add(panel);
       // let title = popup.scene.add.sprite(0, -110 + yOffset, 'freespin_title').setOrigin(0.5);
       // popup.add(title);
        
        // add caption
        //popup.captionText = popup.scene.add.bitmapText(0, -80, 'gameFont_2', 'START FREE GAME', 33, 1).setOrigin(0.5);
        //popup.captionText.tint = 0xFFFFFF;
        //popup.add(popup.captionText);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, -90 + yOffset, 'gameFont_1', '0', 53, 1).setOrigin(0.5);
        //popup.messageText.tint = 0x4f2930;
        popup.add(popup.messageText);

        // add buttons
        popup.addButton('okButton','long_button', 'long_button_hover', false, 0, 140 + yOffset);
        popup['okButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['okButton'].clickEvent.add(()=>{popup.scene.guiController.closePopUp(popup);});
        // add button text
        popup.okText = popup.scene.add.bitmapText(0, 133 + yOffset, 'gameFont_1', 'START', 40, 1).setOrigin(0.5);
        popup.okText.tint = 0xFFFFFF;
        popup.add(popup.okText);
    },

    createBigWinPUHandler: function(popup)
    {
        let yOffset = -70; 
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0 + yOffset, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        popup.add(backGround);
        // backGround.setAlpha(0.5);
        let panel = popup.scene.add.sprite(0, 0 + yOffset, 'bigwin_panel').setOrigin(0.5);
        popup.add(panel);
        //let title = popup.scene.add.sprite(0, -90 + yOffset, 'bigwin_title').setOrigin(0.5);
        //popup.add(title);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, -105 + yOffset, 'gameFont_1', '0', 53, 1).setOrigin(0.5);
        //popup.messageText.tint = 0x4f2930;
        popup.add(popup.messageText);
    },

    createHugeWinPUHandler: function(popup)
    {
        let yOffset = -70; 
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0 + yOffset, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        popup.add(backGround);
        // backGround.setAlpha(0.5);
        let panel = popup.scene.add.sprite(0, 0 + yOffset, 'hugewin_panel').setOrigin(0.5);
        popup.add(panel);
        //let title = popup.scene.add.sprite(0, -42 + yOffset, 'hugewin_title').setOrigin(0.5);
        //popup.add(title);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, -105 + yOffset, 'gameFont_1', '0', 53, 1).setOrigin(0.5);
        //popup.messageText.tint  = 0x4f2930;
        popup.add(popup.messageText);
    },

    createMegaWinPUHandler: function(popup)
    {
        let yOffset = -70; 
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0 + yOffset, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        popup.add(backGround);
        // backGround.setAlpha(0.5);
        let panel = popup.scene.add.sprite(0, 0 + yOffset, 'megawin_panel').setOrigin(0.5);
        popup.add(panel);
       // let title = popup.scene.add.sprite(0, -80 + yOffset, 'megawin_title').setOrigin(0.5);
       // popup.add(title);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, -105 + yOffset, 'gameFont_1', '0', 53, 1).setOrigin(0.5);
        //popup.messageText.tint = 0x4f2930;
        popup.add(popup.messageText);
    },

    createJackpotWinPUHandler: function(popup)
    {
        let yOffset = -70; 
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0 + yOffset, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        popup.add(backGround);
        // backGround.setAlpha(0.5);
        let panel = popup.scene.add.sprite(0, 0 + yOffset, 'jackpotwin_panel').setOrigin(0.5);
        popup.add(panel);
        //let title = popup.scene.add.sprite(0, -42 + yOffset, 'jackpotwin_title').setOrigin(0.5);
        //popup.add(title);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, -105 + yOffset, 'gameFont_1', '0', 53, 1).setOrigin(0.5);
        //popup.messageText.tint = 0x4f2930;
        popup.add(popup.messageText);
    },
}

class AnimatedCoinParticle extends Phaser.GameObjects.Particles.Particle
{
    constructor (emitter)
    {
        super(emitter);

        this.t = 0;
        this.i = 0;
        this.framesCount = 6;
    }
	
    update (delta, step, processors)
    {
        var result = super.update(delta, step, processors);
        this.t += delta;

        if (this.t >= coinSpinAnim.msPerFrame)
        {
            this.i++;
            if (this.i > this.framesCount-1)
            {
                this.i = 0;
            }
            this.frame = coinSpinAnim.frames[this.i].frame;
            this.t -= coinSpinAnim.msPerFrame;
        }
        return result;
    }
}