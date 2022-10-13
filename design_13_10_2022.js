import React from "react"
import { View, Text, StyleSheet, ImageBackground, Image, FlatList, ScrollView }from "react-native"

const data = [
  {
    events: "2 events",
    Levels: "All Levels",
    club: "Women's club",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRa4M-U4O1k_F5_UGkMmgvR_easwQXPnpAYw&usqp=CAU"
  },
  {
    events: "2 events",
    Levels: "All Levels",
    club: "Men's club",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9i-vEYdkGBpv-t48J4AAzTRuruNOS_Dbgmw&usqp=CAU"
  },
  {
    events: "2 events",
    Levels: "All Levels",
    club: "Children's club",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu3S0hq6gTuYtoAj6kPVImWke1LthuCkqPhw&usqp=CAU"
  },
]

const data2 = [
  {
    text: "Yoga & Tennis",
    amount: "$50",
    date: "Feb 13|08:00am-13:00am",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuKl3C--32wtTiq5-tNI-U8ZzztXdmM7cJQ&usqp=CAU",
  },
  {
    text: "Beginner Bootcamp",
    amount: "$40",
    date: "Feb 25|09:00am-14:00am",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYiyAa8KO_7dHglsqKok_fMouQM1VHc4snIw&usqp=CAU",
  },
  {
    text: "Men's League",
    amount: "$30",
    date: "Feb 29|02:00am-12:00am",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkb0qAvvbfLN7ch9L1liPYzTkmTaEkGcBHEg&usqp=CAU",
  },
  {
    text: "Yoga & Tennis",
    amount: "$10",
    date: "Feb 27|04:00am-11:00am",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSn3MR2l5R-rFhNNykVHFh6g38EJrBbwI91g&usqp=CAU",
  },
  {
    text: "Beginner Bootcamp",
    amount: "$20",
    date: "Feb 28|10:00am-15:00am",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw3AmDaerWcVJNTScvMExI-cFrQqx3__TTXA&usqp=CAU",
  },
]
export default function clubScreen(){
  function listRender({item}){
    return(
      <View style={styles.cardDesign}>
        <ImageBackground
          source={{uri:item.image}}
          style={styles.imageSize}
          imageStyle={{borderRadius: 20}}>
          <View style={styles.womenClubTextView}>
            <Text style={styles. trainText}>
              {item.club}
            </Text>
          </View>
           <View style={styles.textOnImage}>
             <Text style={styles.allLevelText}>
               {item.Levels}
             </Text>
          </View>
           <View style={styles.eventTextView}>
             <Text>{item.events}</Text>
          </View>
        </ImageBackground>
      </View>
    )
  }
  function list({item}){
    return(
      <View style={styles.bottomView}>
        <View>
          <Image source={{uri:item.image}}
            style={styles.listIcon}
            />
        </View>
         <View style={{flex: 1,marginLeft: 10}}>
           <Text style={styles.yogaTextDesign}>
             {item.text}
           </Text>
            <Text style={styles.dateText}>
              {item.date}
           </Text>
        </View>
         <View style={styles.amountView}>
           <Text style={{color:"#FDFDFD",fontSize:12}}>
             {item.amount}
           </Text>
        </View>
      </View>
    )
  }
  return(
    <View style={{flex:1,backgroundColor:"#FFFFFF"}}>
     <ScrollView>
      <View style={styles.headerView}>
        <View style={styles.menuIconView}>
          <Image 
            source={{uri: "https://cdn-user-icons.flaticon.com/81553/81553496/1665649665730.svg?token=exp=1665650567~hmac=22737560c0df0b13f427aa2220023d35"}} 
            style={styles.menuIcon}
            />
        </View>
        <View>
          <Image 
            source={{uri: "https://cdn-icons-png.flaticon.com/128/2811/2811790.png"}} 
            style={styles.menuIcon}
            />
        </View>
       </View>
      <View>
        <Text style={styles.clubText}>
          Clubs
        </Text>
       </View>
      <View>
        <FlatList
          data={data}
          renderItem={listRender}
          horizontal={true}
          />
       </View>
      <View style={styles.trainTextView}>
        <View>
          <Text style={styles.trainText}>Train</Text>
        </View>
        <View>
           <Text style={{color: "darkgreen"}}>Alles</Text>
        </View>
       </View>
      <View>
        <FlatList
          data={data2}
          renderItem={list}
          />
       </View>
     </ScrollView>
    </View>
  )
}
const styles=StyleSheet.create({
  headerView: {
    paddingRight: 15,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  menuIconView: {
    backgroundColor: "#1C1C1C",
    borderRadius: 8,
    padding: 7
  },
  menuIcon: {
    height: 20,
    width: 20
  },
  clubText: {
    color: "#232323",
    fontSize: 21,
    fontWeight: "600",
    marginLeft: 10,
    marginTop: 10
  },
  cardDesign: {
    height: 200,
    width: 150,
    margin: 13,
    marginRight: 0,
    borderRadius: 20
  },
  imageSize: {
    height: 200,
    width: 150,
    borderRadius: "20%"
  },
  trainTextView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 13
  },
  trainText: {
    color: "#232323",
    fontSize: 18,
    fontWeight: "600",
  },
  womenClubTextView: {
    paddingLeft:15,
    paddingTop:15,
    width: 95
  },
  textOnImage: {
    padding: 0,
    backgroundColor: "white",
    borderRadius: 8,
    height: 25,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginLeft: 15
  },
  allLevelText: {
    fontSize: 10,
    color: "#1C1C1C"
  },
  eventTextView: {
    marginTop: 80,
    marginLeft: 15
  },
  bottomView: {
    flex: 1,
    marginBottom: 13,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  listIcon: {
    height: 35,
    width: 35,
    borderRadius: 10
  },
  amountView: {
    height: 30,
    width: 30,
    backgroundColor: "#232323",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50
  },
  dateText: {
    fontSize:13,
    color: "#AAAAAA"
  },
  yogaTextDesign: {
    fontSize: 18,
    fontWeight: "500",
    color: "#232323"
  }
})
