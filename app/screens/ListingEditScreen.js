import { StyleSheet } from "react-native";
import * as Yup from "yup";
import listingApi from '../api/listings';


import {
  AppForm ,
  AppFormField ,
  AppFormPicker ,
  SubmitButton,
} from "../components/forms";

import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import { useState } from "react";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "please select atleast one image")
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "#fc5c65", icon: "chair-rolling" },
  { label: "Clothing", value: 2, backgroundColor: "#fd9644", icon: "tshirt-crew" },
  { label: "Electronics", value: 3, backgroundColor: "#fed330", icon: "cellphone" },
  { label: "Books", value: 4, backgroundColor: "#26de81", icon: "book" },
  { label: "Appliances", value: 5, backgroundColor: "#45aaf2", icon: "blender" },
  { label: "Sports", value: 6, backgroundColor: "#4b7bec", icon: "basketball" },
  { label: "Toys", value: 7, backgroundColor: "#9b59b6", icon: "duck" },
  { label: "Vehicles", value: 8, backgroundColor: "#f7b731", icon: "car" },
  { label: "Home Decor", value: 9, backgroundColor: "#20bf6b", icon: "floor-lamp" },
  { label: "Jewelry", value: 10, backgroundColor: "#eb3b5a", icon: "ring" },
  { label: "Other", value: 11, backgroundColor: "#a55eea", icon: "dots-horizontal" },
];


function ListingEditScreen() {

  const location= useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress]= useState(0);

  const handleSubmit=async (listing, {resetForm }) =>{
    setProgress(0);
    setUploadVisible(true);
      const result = await listingApi.addListing(
        {...listing, location},
        progress=>setProgress(progress)
        );
      

    if(!result.ok) {
      setUploadVisible(false);
      return alert("could not save the listing");
    } 

    resetForm();
  }
  return (
    <Screen style={styles.container}>
      <UploadScreen onDone={()=> setUploadVisible(false)} progress={progress} visible={uploadVisible}/>
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
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker 
          items={categories} 
          name="category" 
          numberOfCoulmns={3}
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
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
