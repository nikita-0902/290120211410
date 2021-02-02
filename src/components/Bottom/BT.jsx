import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addMessage } from '../../Redux/reducers';

import b from './Bottom.module.css';
import m from './Message.module.css';
import FlipMove from 'react-flip-move';


class BT extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: ''
        };
    }
    addMsg = () => {
        const { input } = this.state;
        if (input) {
            this.props.dispatch(addMessage(input));
            this.setState({ input: '' });
        }
    };
    handleEnter = (e) => {
        if (e.key === "Enter" && e.ctrlKey) this.addMsg();
    }
    inputChange = e => {
        this.setState({ input: e.target.value });

    };
    render() {
        const { input } = this.state;
        return (

            <div>
                <div className={b.fourth}>
                </div>
                <div className={b.comment1}>
                    <span className={b.name1}>Самуил</span>
                    <span className={b.date1}> 13 октября 2011</span>
                    <span className={b.triangle}></span>
                    <div className={b.comtext}>
                        Привет, Верунь! ниче себе ты крутая. фотка класс!!!!
                </div>
                </div>
                <div className={b.comment2}>
                    <span className={b.name2}>Лилия Семёновна <span className={b.date2}> 14 октября 2011</span></span>
                    <span className={b.triangle1}></span>
                    <div className={b.comtext1}>
                        Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?
                </div>
                </div>
                <div className={b.comment3}>
                    <span className={b.name3}>Лилия Семёновна <span className={b.date3}> 14 октября 2011</span></span>
                    <span className={b.triangle2}></span>
                    <div className={b.comtext2}>
                        Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?
                </div>
                </div>

                <div className={b.last__container}>
                    <div className={m.flep}>
                        <ul>
                            <FlipMove>
                                {
                                    this.props.mes.map((mesg, index) =>
                                        <li>
                                            <div className={m.comment4} key={index}>
                                                <span className={m.triangle_}></span>
                                                <span className={m.name4}>Блажко Никита <span className={m.date4}> 15 октября 2021</span></span>
                                                <div className={m.comtext4}>
                                                    {mesg.message}
                                                </div>
                                            </div>
                                        </li>
                                    )}
                            </FlipMove>
                        </ul>
                    </div>
                    <div className={b.bg__}>
                        <textarea
                            type="text"
                            name="userInput"
                            onChange={this.inputChange}
                            value={input}
                            onKeyDown={this.handleEnter}
                            required
                        >
                        </textarea>
                        <button
                            onClick={this.addMsg}
                        >
                            Написать консультанту
                        </button>
                    </div>
                </div>
            </div >

        )
    }
}

const mapStateToProps = (state) => ({
    mes: state.reducers.data,

})
export default connect(mapStateToProps)(BT);
