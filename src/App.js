import React, { Component } from "react";
import 'react-chat-elements/dist/main.css';
import { Input, Button, ChatList, MessageBox, MessageList } from 'react-chat-elements';

import './App.css';


class App extends Component {
    render() {
        return (
            <>
                <div class="application-container">
                    <div class="application-header">
                        <b>Team FLEX Chat</b>
                    </div>
                    <div className="main-content">
                        <div class="page-content">
                            <div class="chat-messages">
                                <MessageBox position="left" text="Приветик, Гера!" title="Ваня Барауля" date={new Date()} />
                                <MessageBox position="right" text="Дарова, Ваня ❤️" title="Герман Сташинский" date={new Date()} />
                                <MessageBox position="right" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." title="Герман Сташинский" date={new Date()} />
                                <MessageBox position="right" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." title="Герман Сташинский" date={new Date()} />
                                <MessageBox position="left" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." title="Ваня Барауля" date={new Date()} />
                                <MessageBox position="left" text="Я тебе нравлюсь?!" title="Ваня Барауля" date={new Date()} />
                                <MessageBox position="right" text="Очень ❤️" title="Герман Сташинский" date={new Date()} />
                            </div>
                            <div class="chat-bottom-holder">
                                <Input rightButtons={
                                    <Button
                                        color='white'
                                        backgroundColor='#455A64'
                                        text='Send' />
                                }
                                    placeholder="Type here..." />
                            </div>
                        </div>
                        <div className="right-sidebar">
                            <ChatList
                                className='chat-list'
                                dataSource={[
                                    {
                                        avatar: 'https://sun2.beltelecom-by-minsk.userapi.com/impf/c848536/v848536509/6bf05/hcajfhPnl_E.jpg?size=100x0&quality=88&crop=6,139,1469,1469&sign=c753bd4f12d91c853455b659765180eb&ava=1',
                                        alt: 'Reactjs',
                                        title: 'Ваня Барауля',
                                        subtitle: 'Очень ❤️',
                                        date: new Date(),
                                        unread: 0,
                                    },
                                ]} />
                                <ChatList
                                className='chat-list'
                                dataSource={[
                                    {
                                        avatar: 'https://sun1.beltelecom-by-minsk.userapi.com/impg/c813024/v813024851/1667b/XanyMM5P1gk.jpg?size=100x0&quality=88&crop=0,424,1620,1620&sign=69f4c29b38b44c2a888ab9f4a9db9cf3&ava=1',
                                        alt: 'Reactjs',
                                        title: 'Angelina',
                                        subtitle: 'Как же меня все заебали!',
                                        date: new Date(),
                                        unread: 0,
                                    },
                                ]} />
                        </div>
                    </div>
                    <div class="application-footer">
                        <p>Team FLEX Chat © 2020</p>
                    </div>
                </div>
            </>
        );
    }
}

export default App;