import React,{Component} from "react";
import style from "./demo.css";
import "./test.less";
class Demo extends Component{
    render(){
        return (
            <div className={style.test}>
                hello react
            </div>
        )
    }
}
export default Demo;