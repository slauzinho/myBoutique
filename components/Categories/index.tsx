import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View } from 'react-native';
import SubCategories from '../SubCategories';
import { Title } from './styles';

interface Brand {
  brand_id: string;
  brand_name: string;
  count: string;
}

export interface SubCats {
  id: number;
  name: string;
  subcats?: SubCats[];
}

interface DressingCat {
  id: number;
  name: string;
  ord: number;
  subcats: SubCats[];
}

interface Data {
  brands: Brand[];
  dressing_cats: DressingCat[];
}

const Categories = () => {
  const [data, setData] = useState<Data | undefined>();
  const [currentCat, setCurrentCat] = useState<SubCats[] | undefined>();
  const [currentID, setCurrentID] = useState<number | undefined>();

  const loadSubCats = (subCats: SubCats[], id: number) => {
    if (id === currentID) {
      setCurrentID(undefined);
    } else {
      setCurrentCat(subCats);
      setCurrentID(id);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://www.myprivateboutique.ch/en/api/v2/dressing/catalogue/categories'
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <View>
      {data &&
        data.dressing_cats &&
        data.dressing_cats.map(cat => (
          <View key={cat.id}>
            <Title
              onPress={() => loadSubCats(cat.subcats, cat.id)}
              active={cat.id === currentID}
            >
              {cat.name}
            </Title>
            {currentID === cat.id && currentCat && (
              <SubCategories subcats={cat.subcats} />
            )}
          </View>
        ))}
    </View>
  );
};

export default Categories;
