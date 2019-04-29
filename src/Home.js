import React, { Component } from 'react';
import {View} from 'react-native';
import { Container, Tab, Tabs, ScrollableTab, Text, Card, CardItem, Body } from 'native-base';


export default class Home extends Component {

    static navigationOptions = {
        title: 'Home',
    }

    state = {
        tabArray: ["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5", "Tab 6", "Tab 7", "Tab 8", "Tab 9", "Tab 10"],
        currentTabID: 0,
        previousTabID: 0,
    }

    changeTab = (fromID,currentID) =>{
        this.state.currentTabID = currentID,
        this.state.previousTabID = fromID,
        this.setState(this.state);
    }

    render() {
        return (

            <Container>

                <Tabs 
                renderTabBar={() => <ScrollableTab />}
                onChangeTab={(event) => this.changeTab(event.from,event.i)}
                >
                  {
                    this.state.tabArray.map((item, index) => {
                     return (
                        <Tab heading={item} key={index}>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center',alignItems: 'center'}}>
                            <Text style={{fontSize:20}}> This is {item} </Text>
                            <Text style={{fontSize:20,paddingTop:10}}> The Tab ID is {this.state.currentTabID} </Text>
                            <Text style={{fontSize:20,paddingTop:10}}> The Tab ID from {this.state.previousTabID} </Text>
                            </View>
                           
                        </Tab>
                      )
                    })
                  }
                </Tabs>

            </Container>

        );
    }
}