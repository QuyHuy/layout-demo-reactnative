import React, { Component } from 'react'
import { View, Dimensions, TouchableHighlight, Text, Animated, FlatList } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component'
import FlastListItem from './FlastListItem';

const DEVICE_WIDTH = Dimensions.get("window").width;
export default class TabContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            xTabOne: 0,
            xTabTwo: 0,
            translateX: new Animated.Value(0),
            translateY: -1000,
            translateXTabOne: new Animated.Value(0),
            translateXTabTwo: new Animated.Value(DEVICE_WIDTH),
            tableHead: ['サイズ', '身幅', '肩幅', '着丈', 'そで丈'],
            tableData: ['FREE\n(M)','51.5', '36', '59.5', '23']
        }
    }
    handleSlide = type => {
        let { active, xTabOne, xTabTwo, translateX, translateXTabOne, translateXTabTwo } = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 100
        }).start();
        if(active === 0) {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: 0, 
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: DEVICE_WIDTH, 
                    duration: 100
                }).start(),
            ])
        } else {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: -DEVICE_WIDTH, 
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: 0, 
                    duration: 100
                }).start(),
            ])
        }
    }
    render() {
        let productData = [
            {
                tag: '性別タイプ',
                name: 'レディース',
            },
            {
                tag: 'カテゴリ',
                name: 'トップス > ニット/セーター',
            },
            {
                tag: '素材',
                name: 'レーヨン70% ナイロン30%',
            },
            {
                tag: '原産国',
                name: '中国',
            },
            {
                tag: '即日配送',
                name: '即日配送可',
            },
            {
                tag: '送料',
                name: '購入金額に関わらず一律210円',
            },
            {
                tag: 'ギフト',
                name: 'ラッピング可'
            },
            {
                tag: '問合せ番号',
                name: '19282575（ZOZO）',
            },
            {
                tag: '',
                name: 'C2589（店舗）',
            }
        ];
        let newTabs = [
            {
                image: 'https://o.imgz.jp/fashionnews/107945/master_130_1.jpg',
                title: 'トレンド感のあるプチプラアイテムが揃う！KOBE LETTUCEでおしゃれアイテムをゲットして♪',
                create: '#CBK magazine',
            },
            {
                image: 'https://o.imgz.jp/fashionnews/109957/master_130_1.jpg',
                title: '季節の変わり目はボーダーの出番！ボーダートップスでおしゃれに乗り切るコーディネート',
                create: '#CBK magazine',
            },
            {
                image: 'https://o.imgz.jp/fashionnews/109900/master_130_1.jpg',
                title: '50代女性のお悩みを解決！ 万能なワイドパンツを今すぐGETしよう♪',
                create: '#CBK magazine',
            },
            {
                image: 'https://o.imgz.jp/fashionnews/109868/master_130_1.jpg',
                title: '「定番ボーダー」を今っぽくおしゃれに！ シーン別に着こなす最旬ボーダースタイル',
                create: '#CBK magazine',
            },
            {
                image: 'https://o.imgz.jp/fashionnews/108474/master_130_1.jpg',
                title: 'オンナ度を上げるなら、袖コンシャスニットに頼れば間違いない♥',
                create: '#CBK magazine',
            }
        ]
        let { xTabOne, xTabTwo, translateX, active, translateXTabOne, translateXTabTwo, translateY } = this.state;
        return (
            <View style={{ width: '100%', marginLeft: 'auto', marginLeft: 'auto', height: 'auto' }}>
                <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 20, height: 36, position: 'relative'}}>
                    <Animated.View style={{ position: 'absolute', width: '50%', height: '100%', top: 0, left: 0, transform: [{translateX}] }}/>
                    <TouchableHighlight underlayColor='rgba(0,0,0,0.25)' style={{ flex: 1, justifyContent: 'center', alignItems: 'center', boderWidth: 1, borderColor: '#007aff', borderRadius: 4, borderRightWidth: 0, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                        onLayout={event => this.setState({xTabOne: event.nativeEvent.layout.x})}
                        onPress={() => this.setState({active: 0}, () => this.handleSlide(xTabOne))}    
                    >
                        <Text style={{opacity: active === 0 ? 1 : 0.5}}>アイテム説明</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='rgba(0,0,0,0.25)' style={{ flex: 1, justifyContent: 'center', alignItems: 'center', boderWidth: 1, borderColor: '#007aff', borderRadius: 4, borderLeftWidth: 0, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                        onLayout={event => this.setState({xTabTwo: event.nativeEvent.layout.x})}
                        onPress={() => this.setState({active: 1}, () => this.handleSlide(xTabTwo))}
                    >
                        <Text style={{opacity: active === 1 ? 1 : 0.5}}>サイズ詳細</Text>
                    </TouchableHighlight>
                </View>
                <View>
                {
                    (this.state.active === 0 ? 
                        <Animated.View style={{transform:[{translateX: translateXTabOne}], padding: 10}}
                            onLayout={event => this.setState({translateY: event.nativeEvent.layout.height})}
                        >
                            <Text>カラバリが豊富で使いやすいので、何枚でも欲しくなるベーシックな五分袖サマーニット。やや太めのリブが今年らしいスタイルに。</Text>
                            <Text>無地～ボーダー柄までカラーバリエーションも豊富にご用意。</Text>
                            <Text> 【素材・サイズ感】</Text>
                            <Text>起毛感の少ないハイゲージリブニット素材を使用。伸縮性があり、程よく体にフィットします。薄手なのでボトムにINでもごわつきにくくすっきり。</Text>
                            <Text> 【スタイリング】</Text>
                            <Text>シンプルなデザインなので、デニムパンツ・スカート・ワイドパンツまで合わせるボトムを選びません。</Text>
                            <Text>春夏秋とロングシーズン着まわせる便利な1枚です。</Text>
                            <View style={{marginTop: 20, paddingLeft: 20, backgroundColor:'#f0f0f0'}}>
                                <FlatList
                                    data={productData}
                                    renderItem={
                                        ({item}) =>
                                    <Text style={{lineHeight: 30}}>{item.tag} <Text style={{position: 'absolute', left: 75}}> :  {item.name}</Text></Text>
                                    }
                                ></FlatList>
                            </View>
                            <View style={{height: 1, backgroundColor: '#f0f0f0', width: DEVICE_WIDTH, marginTop: 20, marginLeft: -10}}></View>
                            <View>
                                <Text style={{textAlign: 'center', fontSize: 20, marginTop: 20}}>関連ファッションまとめ</Text>
                                <FlatList
                                    data={newTabs}
                                    renderItem={
                                        ({item, index})=> {
                                            return(
                                            <FlastListItem item={item} index={index}></FlastListItem>)
                                        }
                                    }
                                ></FlatList>
                            </View>
                        </Animated.View>
                    : 
                        <Animated.View style={{transform:[{translateX: translateXTabTwo}]}}>
                            <Text style={{marginLeft: 20, paddingBottom: 20}}>カテゴリ ：<Text style={{color: '#08c'}}> Tシャツ/カットソー</Text></Text>
                            <Table borderStyle={{borderWidth: 1, borderColor: '#e9e9e9'}}>
                                <Row data={this.state.tableHead} style={{height: 40, backgroundColor: '#f1f8ff' }} textStyle={{textAlign: 'center'}} />
                                <Row data={this.state.tableData} textStyle={{textAlign: 'center'}}/>
                            </Table>
                            <View style={{marginTop: 20, padding: 20}}>
                                <Text >※ZOZOTOWN独自の方法により採寸しております。</Text>
                                <Text>※（）内の表示はZOZOTOWN独自の基準で振り分けたサイズです。ブランド表記サイズとは異なりますのでご注意ください。</Text>
                                <Text style={{marginTop: 10, color: '#08c'}}>サイズガイド</Text>
                            </View>
                        </Animated.View>
                    ) 
                }
            </View>
        </View>
        )
    }
}
