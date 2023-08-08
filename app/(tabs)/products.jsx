import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Products() {
  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    getProduct()
  },[])

  async function getProduct() {
    setLoading(true)
    await fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        if(data) {
          setItems(data)
          setLoading(false)
        }
      })
  }

  return (
    <View style={styles.container}>
      <View>
        {isLoading ? <Text style={styles.loading}>Tunggu sebentar...</Text> : ''}
      </View>
      <FlatList
        data={items}
        renderItem={({item}) => (
        <View style={styles.itemContainer}>
          <Image 
            style={styles.img}
            source={{  uri: item.image }}
          />
          <Text style={styles.item}>{item.title}</Text>
          {/* <Text style={styles.itemPrice}>${item.price}</Text> */}
        </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  loading: {
    textAlign: 'center',
    fontSize: 20,
  },
  item: {
    paddingLeft: 10,
    fontSize: 17,
    height: 44,
  },
  itemPrice: {
    fontSize: 15,
    color: '#7b7b7b',
    paddingLeft: 10,
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: .4,
    borderBottomColor: '#7b7b7b'
  }
})