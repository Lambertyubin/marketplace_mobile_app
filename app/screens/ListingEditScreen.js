import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from "yup";
import * as Location from "expo-location";
import AppScreen from '../components/AppScreen';
import CategoryPickerItem from '../components/CategoryPickerItem';
import listingsApi from '../api/listings'

import { AppForm , 
        AppFormField , 
        AppFormPicker, 
        SubmitButton,
        FormImagePicker
    } from '../components/forms'
import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image")
});

const categories = [
    { label: "Furniture", value: 1, icon:"floor-lamp", backgroundColor:"#fc5c65" },
    { label: "Clothing", value: 2, icon:"shoe-heel", backgroundColor:"#2bcbba" },
    { label: "Cars", value: 3, icon:"car", backgroundColor:"#fd9644" },
    { label: "Camera", value: 4, icon:"camera", backgroundColor:"#fed330" },
    { label: "Games", value: 5, icon:"cards", backgroundColor:"#26de81" },
    { label: "Sports", value: 6, icon:"basketball", backgroundColor:"#45aaf2" },
    { label: "Movies & Music", value: 7, icon:"headphones", backgroundColor:"#4b7bec" },
  ];

function ListingEditScreen() {
    const [location, setLocation] = useState();
    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        getLocation();
    }, []);

    const getLocation = async () => {
        try {
        const { granted } = await Location.requestBackgroundPermissionsAsync();
        if (!granted) return;
        const {
            coords: { latitude, longitude },
        } = await Location.getLastKnownPositionAsync();
        setLocation({ latitude, longitude });
        } catch (error) {
        console.log(error);
        }
    };

    const handleSubmit = async (listing, { resetForm }) => {

        setProgress(0)
        setUploadVisible(true)

        const result = await listingsApi.addListing(
            {...listing, location}, 
            progress=> setProgress(progress))
        

        if(!result.ok) {
            setUploadVisible(false)
            return alert('Could not save the listing.')
        }

        resetForm()
            
    }


    return (
        <AppScreen style={styles.container}>
            <UploadScreen onDone={()=>setUploadVisible(false)} progress={progress} visible={uploadVisible}/>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                    images: []
                  }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
             >
                <FormImagePicker name="images"/>
                <AppFormField maxLength={255} name="title" placeholder="Title"/>
                <AppFormField
                keyboardType="numeric"
                maxLength={8}
                name="price"
                placeholder="Price"
                width="35%"
                />
                <AppFormPicker 
                    items={categories} 
                    name="category" 
                    numberOfColumns={3} 
                    placeholder="Category" 
                    width="50%" 
                    PickerItemComponent={CategoryPickerItem}
                    />
                <AppFormField
                maxLength={255}
                multiline
                name="description"
                numberOfLines={3}
                placeholder="Description"
                />
                <SubmitButton title="Post" />

            </AppForm>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding:10
    }
})

export default ListingEditScreen;