import React from 'react'
import "./_themechanger.scss"

// Icons Import
import { IoIosSettings } from "react-icons/io"
import { useState } from 'react'
import { useEffect } from 'react'

// Next UI
import { Popover, Button, Text } from "@nextui-org/react";

const ThemeChanger = () => {
    const [themePositionToggler, setThemePositionToggler] = useState(false)
    const [theme, setTheme] = useState("theme1");
    useEffect(() => {
        document.body.className = theme
    }, [theme])
    const colors = [
        {
            theme: "theme1",
            color: "#25ca7f"
        },
        {
            theme: "theme2",
            color: "#00a3e1"
        },
        {
            theme: "theme3",
            color: "#d94c48"
        },
        {
            theme: "theme4",
            color: "#bb68c8"
        },
        {
            theme: "theme5",
            color: "#0dcdbd"
        },
        {
            theme: "theme6",
            color: "#eae328"
        },
        {
            theme: "theme7",
            color: "#ff5e94"
        },
        {
            theme: "theme8",
            color: "#fa5b0f"
        },
        {
            theme: "theme9",
            color: "#9200ee"
        },
        {
            theme: "theme10",
            color: "#00d4bd"
        },
        {
            theme: "theme11",
            color: "#5e9e9f"
        },
        {
            theme: "theme12",
            color: "#666d41"
        }
    ]
    return (
        // <div className={themePositionToggler ? "themechanger_show" : "themechanger_hide"}>
        //     <div className='themechanger_setting' onClick={() => setThemePositionToggler(!themePositionToggler)}>
        //         <IoIosSettings className="themechanger_setting_icon" />
        //     </div>
        //     <div className='themechanger_colors'>
        //         <h4>Choose a color</h4>
        //         <div className='themechanger_colors_container'>
        //             {
        //                 colors.map((color) => (
        //                     <div className='themechanger_colors_container_color' style={{ backgroundColor: color.color }} onClick = {() => setTheme(color.theme)}></div>
        //                 ))
        //             }
        //         </div>
        //     </div>

        // </div>
        <div className="themechanger">
            <Popover>
                <Popover.Trigger>
                    <div className="themechanger_setting">
                        <IoIosSettings className="themechanger_setting_icon" />
                    </div>
                </Popover.Trigger>
                <Popover.Content>
                    <div className='themechanger_colors'>
                        {
                            colors.map((color) => (
                                <div className='themechanger_colors_color' style={{ backgroundColor: color.color }} onClick={() => setTheme(color.theme)}></div>
                            ))
                        }
                    </div>
                </Popover.Content>
            </Popover>
        </div>
    )
}

export default ThemeChanger