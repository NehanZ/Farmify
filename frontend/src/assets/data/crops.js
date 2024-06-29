import cropImg1 from "../photo/crop1.jpg"
import cropImg2 from "../photo/crop2.jpg"
import cropImg3 from "../photo/crop3.jpg"
import cropImg4 from "../photo/crop4.jpg"
import cropImg5 from "../photo/crop5.jpg"
import cropImg6 from "../photo/crop6.jpg"
import cropImg7 from "../photo/crop7.jpg"
import cropImg8 from "../photo/crop8.jpg"
import cropImg9 from "../photo/crop9.jpg"
import cropImg10 from "../photo/crop10.jpg"
import cropImg11 from "../photo/crop11.jpg"

const cropData = [
    {
      id: '1',
      name: 'Rice',
      introduction: 'Rice is the staple food crop of Sri Lanka, cultivated extensively throughout the country.',
      photo: cropImg1,
      climate_soil_requirements: {
        temperature: '20-35°C',
        rainfall: '1000-2000mm annually',
        soil_type: 'Clay or clay loam soils',
      },
      planting: {
        method: 'Direct seeding or transplanting',
        season: 'Maha (October-March) and Yala (April-September)',
      },
      cultivation_practices: {
        irrigation: 'Flood irrigation or alternate wetting and drying',
        fertilization: 'NPK application based on soil testing',
      },
      pest_disease_management: {
        pests: ['Brown planthopper', 'Stem borer'],
        diseases: ['Blast', 'Bacterial leaf blight'],
        control_methods: ['Integrated Pest Management', 'Resistant varieties'],
      },
      harvesting: {
        method: 'Manual or mechanical harvesting',
        time: '90-120 days after planting, depending on variety',
      },
      yield_economics: {
        average_yield: '4-5 tons per hectare',
        market_price: 'Varies based on variety and quality',
      },
      processing_value_addition: {
        products: ['Rice flour', 'Rice noodles', 'Rice bran oil'],
      },
      sustainability_practices: [
        'Water-saving techniques',
        'Organic farming methods',
        'Crop rotation',
      ],
      research_development: {
        focus_areas: ['Drought-resistant varieties', 'Pest management'],
      },
      case_studies: [
        {
          title: 'Success of System of Rice Intensification in Ampara District',
          summary: 'Farmers achieved 30% higher yields with reduced water usage.',
        },
      ],
      resources_support: {
        government_agencies: ['Department of Agriculture', 'Rice Research Institute'],
        farmer_organizations: ['All Ceylon Peasants\' Federation'],
      },
      faqs: [
        {
          question: 'What are the best rice varieties for drought-prone areas?',
          answer: 'Drought-tolerant varieties like BG 300 and BG 350 are recommended.',
        },
      ],
      multimedia_resources: {
        planting_guide_video: 'https://example.com/rice_planting_guide.mp4',
        pest_identification_app: 'https://example.com/rice_pest_app',
        yield_calculator: 'https://example.com/rice_yield_calculator',
      },
    },
    {
      id: '2',
      name: 'Tea',
      introduction: 'Tea is a major export crop of Sri Lanka, known worldwide for its quality and flavor.',
      photo: cropImg2,
      climate_soil_requirements: {
        temperature: '18-25°C',
        rainfall: '1500-2500mm annually',
        soil_type: 'Well-drained, acidic soils',
      },
      planting: {
        method: 'Seedlings or vegetative propagation',
        season: 'Year-round, preferably at the onset of rainy season',
      },
      cultivation_practices: {
        pruning: 'Regular pruning to maintain bush shape',
        fertilization: 'Balanced NPK application',
      },
      pest_disease_management: {
        pests: ['Tea mosquito bug', 'Red spider mite'],
        diseases: ['Blister blight', 'Root rot'],
        control_methods: ['Integrated Pest Management', 'Biological control'],
      },
      harvesting: {
        method: 'Hand plucking of two leaves and a bud',
        frequency: 'Every 7-14 days',
      },
      yield_economics: {
        average_yield: '1500-2000 kg of made tea per hectare per year',
        market_price: 'Varies based on grade and quality',
      },
      processing_value_addition: {
        products: ['Black tea', 'Green tea', 'White tea', 'Flavored teas'],
      },
      sustainability_practices: [
        'Rainforest Alliance certification',
        'Organic tea cultivation',
        'Soil conservation measures',
      ],
      research_development: {
        focus_areas: ['Climate-resilient varieties', 'Mechanization of harvesting'],
      },
      case_studies: [
        {
          title: 'Organic Tea Production in Uva Province',
          summary: 'Small-scale farmers increased profits by 40% through organic certification.',
        },
      ],
      resources_support: {
        government_agencies: ['Tea Research Institute', 'Sri Lanka Tea Board'],
        farmer_organizations: ['Tea Small Holdings Development Authority'],
      },
      faqs: [
        {
          question: 'How can I improve the quality of my tea leaves?',
          answer: 'Focus on proper plucking techniques, timely processing, and maintaining hygiene during processing.',
        },
      ],
      multimedia_resources: {
        pruning_techniques_video: 'https://example.com/tea_pruning_guide.mp4',
        tea_tasting_course: 'https://example.com/tea_tasting_online_course',
        quality_grading_app: 'https://example.com/tea_quality_grading_app',
      },
    },
    {
      id: '3',
      name: 'Coconut',
      introduction: 'Coconut is a versatile crop with numerous uses in food, industry, and export.',
      photo: cropImg3,
      climate_soil_requirements: {
        temperature: '20-35°C',
        rainfall: '1500-2500mm annually',
        soil_type: 'Well-drained sandy or loamy soils',
      },
      planting: {
        method: 'Seedling transplantation',
        season: 'Beginning of rainy season',
      },
      cultivation_practices: {
        spacing: '7-9 meters between plants',
        fertilization: 'Organic and inorganic fertilizers',
      },
      pest_disease_management: {
        pests: ['Rhinoceros beetle', 'Red palm weevil'],
        diseases: ['Bud rot', 'Stem bleeding'],
        control_methods: ['Integrated Pest Management', 'Pheromone traps'],
      },
      harvesting: {
        method: 'Manual harvesting using poles or climbing',
        frequency: 'Every 45-60 days',
      },
      yield_economics: {
        average_yield: '50-60 nuts per palm per year',
        market_price: 'Varies based on market demand',
      },
      processing_value_addition: {
        products: ['Coconut oil', 'Desiccated coconut', 'Coir products'],
      },
      sustainability_practices: [
        'Intercropping',
        'Organic farming',
        'Water conservation',
      ],
      research_development: {
        focus_areas: ['Drought-resistant varieties', 'Disease management'],
      },
      case_studies: [
        {
          title: 'Coconut-based agroforestry in Kurunegala District',
          summary: 'Farmers increased income by 50% through diversification with intercrops.',
        },
      ],
      resources_support: {
        government_agencies: ['Coconut Development Authority', 'Coconut Research Institute'],
        farmer_organizations: ['Coconut Growers Association'],
      },
      faqs: [
        {
          question: 'How long does it take for a coconut tree to bear fruit?',
          answer: 'Typically, coconut trees start bearing fruit 6-10 years after planting, depending on the variety and growing conditions.',
        },
      ],
      multimedia_resources: {
        planting_guide_video: 'https://example.com/coconut_planting_guide.mp4',
        pest_management_app: 'https://example.com/coconut_pest_management_app',
        value_addition_course: 'https://example.com/coconut_products_course',
      },
    },
    {
      id: '4',
      name: 'Rubber',
      introduction: 'Rubber is an important industrial and export crop in Sri Lanka.',
      photo: cropImg4,
      climate_soil_requirements: {
        temperature: '20-30°C',
        rainfall: '2000-3000mm annually',
        soil_type: 'Well-drained loamy soils',
      },
      planting: {
        method: 'Budded stumps',
        season: 'Beginning of rainy season',
      },
      cultivation_practices: {
        spacing: '5-6 meters between plants',
        fertilization: 'NPK application based on soil testing',
      },
      pest_disease_management: {
        pests: ['Termites', 'White grubs'],
        diseases: ['White root disease', 'Leaf fall disease'],
        control_methods: ['Chemical control', 'Cultural practices'],
      },
      harvesting: {
        method: 'Tapping',
        frequency: 'Every 2-3 days',
      },
      yield_economics: {
        average_yield: '1000-1500 kg of dry rubber per hectare per year',
        market_price: 'Fluctuates based on global demand',
      },
      processing_value_addition: {
        products: ['Latex products', 'Rubber sheets', 'Rubber wood'],
      },
      sustainability_practices: [
        'Agroforestry',
        'Rainwater harvesting',
        'Rubber wood utilization',
      ],
      research_development: {
        focus_areas: ['High-yielding clones', 'Disease-resistant varieties'],
      },
      case_studies: [
        {
          title: 'Rubber-based agroforestry in Ratnapura District',
          summary: 'Smallholders increased income by 30% through intercropping with tea and fruit trees.',
        },
      ],
      resources_support: {
        government_agencies: ['Rubber Research Institute', 'Rubber Development Department'],
        farmer_organizations: ['Rubber Smallholders Development Society'],
      },
      faqs: [
        {
          question: 'When can I start tapping a rubber tree?',
          answer: 'Rubber trees are usually ready for tapping when they reach a girth of 45-50 cm at a height of 120 cm from the ground, typically 5-7 years after planting.',
        },
      ],
      multimedia_resources: {
        tapping_technique_video: 'https://example.com/rubber_tapping_guide.mp4',
        clone_selection_app: 'https://example.com/rubber_clone_selector',
        market_price_tracker: 'https://example.com/rubber_price_tracker',
      },
    },
    {
      id: '5',
      name: 'Cinnamon',
      introduction: 'Ceylon Cinnamon is a high-value spice crop and major export of Sri Lanka.',
      photo: cropImg5,
      climate_soil_requirements: {
        temperature: '25-30°C',
        rainfall: '1500-2500mm annually',
        soil_type: 'Well-drained sandy loam to lateritic soils',
      },
      planting: {
        method: 'Seedlings or stem cuttings',
        season: 'Beginning of rainy season',
      },
      cultivation_practices: {
        spacing: '1.2-1.8 meters between plants',
        pruning: 'Regular pruning to encourage straight stem growth',
      },
      pest_disease_management: {
        pests: ['Shoot borer', 'Leaf miner'],
        diseases: ['Leaf spot', 'Die-back'],
        control_methods: ['Integrated Pest Management', 'Pruning infected parts'],
      },
      harvesting: {
        method: 'Peeling of bark from stems',
        time: '2-3 years after planting, then every 12-18 months',
      },
      yield_economics: {
        average_yield: '400-500 kg of dried quills per hectare per year',
        market_price: 'Premium for high-quality Ceylon Cinnamon',
      },
      processing_value_addition: {
        products: ['Cinnamon quills', 'Cinnamon oil', 'Cinnamon powder'],
      },
      sustainability_practices: [
        'Organic cultivation',
        'Agroforestry systems',
        'Soil conservation',
      ],
      research_development: {
        focus_areas: ['High-yielding varieties', 'Mechanization of peeling'],
      },
      case_studies: [
        {
          title: 'Organic Cinnamon Production in Galle District',
          summary: 'Farmers achieved 25% price premium through organic certification.',
        },
      ],
      resources_support: {
        government_agencies: ['Department of Export Agriculture', 'Cinnamon Research Station'],
        farmer_organizations: ['Cinnamon Growers Association'],
      },
      faqs: [
        {
          question: 'How can I improve the quality of my cinnamon quills?',
          answer: 'Focus on proper peeling techniques, quick drying to prevent mold, and maintaining hygiene during processing.',
        },
      ],
      multimedia_resources: {
        peeling_technique_video: 'https://example.com/cinnamon_peeling_guide.mp4',
        quality_grading_app: 'https://example.com/cinnamon_quality_grader',
        market_linkage_platform: 'https://example.com/cinnamon_market_connect',
      },
    },
    {
      id: '6',
      name: 'Black Pepper',
      introduction: 'Black pepper is a high-value spice crop grown in Sri Lanka\'s wet and intermediate zones.',
      photo: cropImg6,
      climate_soil_requirements: {
        temperature: '20-30°C',
        rainfall: '1500-3000mm annually',
        soil_type: 'Well-drained, organic-rich soils',
      },
      planting: {
        method: 'Stem cuttings',
        season: 'Beginning of rainy season',
      },
      cultivation_practices: {
        spacing: '2-3 meters between plants',
        support: 'Living or non-living standards',
      },
      pest_disease_management: {
        pests: ['Pollu beetle', 'Scale insects'],
        diseases: ['Quick wilt', 'Slow decline'],
        control_methods: ['Integrated Pest Management', 'Phytosanitation'],
      },
      harvesting: {
        method: 'Hand picking of mature spikes',
        time: '6-8 months after flowering',
      },
      yield_economics: {
        average_yield: '1-2 kg of dried pepper per vine per year',
        market_price: 'Varies based on quality and global demand',
      },
      processing_value_addition: {
        products: ['Black pepper', 'White pepper', 'Green pepper'],
      },
      sustainability_practices: [
        'Organic farming',
        'Intercropping',
        'Rainwater harvesting',
      ],
      research_development: {
        focus_areas: ['Disease-resistant varieties', 'Improved processing techniques'],
      },
      case_studies: [
        {
          title: 'Integrated Farming with Black Pepper in Matale District',
          summary: 'Farmers increased overall farm income by 40% through diversification.',
        },
      ],
      resources_support: {
        government_agencies: ['Department of Export Agriculture', 'Spice Research Station'],
        farmer_organizations: ['Pepper Producers Association'],
      },
      faqs: [
        {
          question: 'What are the best practices for post-harvest handling of black pepper?',
          answer: 'Quick drying to prevent mold growth, proper storage in clean, dry conditions, and grading based on size and quality.',
        },
    ],
    multimedia_resources: {
      cultivation_guide_video: 'https://example.com/black_pepper_cultivation_guide.mp4',
      disease_identification_app: 'https://example.com/pepper_disease_identifier',
      market_price_tracker: 'https://example.com/pepper_price_tracker',
    },
  },
  {
    id: '7',
    name: 'Cardamom',
    introduction: 'Cardamom is a high-value spice crop grown in Sri Lanka\'s central highlands.',
    photo: cropImg7,
    climate_soil_requirements: {
      temperature: '10-35°C',
      rainfall: '1500-2500mm annually',
      soil_type: 'Well-drained, humus-rich soils',
    },
    planting: {
      method: 'Rhizome splitting or seedlings',
      season: 'Beginning of monsoon season',
    },
    cultivation_practices: {
      spacing: '2-3 meters between plants',
      shade: 'Requires 40-60% shade',
    },
    pest_disease_management: {
      pests: ['Thrips', 'Root grubs'],
      diseases: ['Rhizome rot', 'Capsule rot'],
      control_methods: ['Integrated Pest Management', 'Proper drainage'],
    },
    harvesting: {
      method: 'Hand picking of mature capsules',
      time: '18-20 months after planting',
    },
    yield_economics: {
      average_yield: '150-200 kg of dried cardamom per hectare',
      market_price: 'Premium for high-quality pods',
    },
    processing_value_addition: {
      products: ['Dried cardamom pods', 'Cardamom oil', 'Cardamom powder'],
    },
    sustainability_practices: [
      'Agroforestry',
      'Organic cultivation',
      'Soil conservation',
    ],
    research_development: {
      focus_areas: ['High-yielding varieties', 'Post-harvest technology'],
    },
    case_studies: [
      {
        title: 'Organic Cardamom Farming in Knuckles Range',
        summary: 'Farmers achieved 30% higher prices through organic certification.',
      },
    ],
    resources_support: {
      government_agencies: ['Department of Export Agriculture', 'Spice Research Station'],
      farmer_organizations: ['Cardamom Growers Association'],
    },
    faqs: [
      {
        question: 'How can I improve the quality of my cardamom?',
        answer: 'Focus on proper shade management, timely harvesting, and quick drying to preserve aroma and color.',
      },
    ],
    multimedia_resources: {
      cultivation_guide_video: 'https://example.com/cardamom_cultivation_guide.mp4',
      disease_identification_app: 'https://example.com/cardamom_disease_identifier',
      market_price_tracker: 'https://example.com/cardamom_price_tracker',
    },
  },
  {
    id: '8',
    name: 'Cloves',
    introduction: 'Cloves are aromatic flower buds used as a spice, grown in Sri Lanka\'s wet zone.',
    photo: cropImg8,
    climate_soil_requirements: {
      temperature: '20-30°C',
      rainfall: '1500-2500mm annually',
      soil_type: 'Well-drained, deep loamy soils',
    },
    planting: {
      method: 'Seedlings',
      season: 'Beginning of rainy season',
    },
    cultivation_practices: {
      spacing: '6-7 meters between plants',
      pruning: 'Minimal pruning required',
    },
    pest_disease_management: {
      pests: ['Stem borer', 'Scale insects'],
      diseases: ['Leaf spot', 'Root rot'],
      control_methods: ['Integrated Pest Management', 'Cultural practices'],
    },
    harvesting: {
      method: 'Hand picking of mature buds',
      time: '6-8 years after planting, then annually',
    },
    yield_economics: {
      average_yield: '3-5 kg of dried cloves per tree per year',
      market_price: 'Varies based on global demand',
    },
    processing_value_addition: {
      products: ['Dried clove buds', 'Clove oil', 'Clove powder'],
    },
    sustainability_practices: [
      'Intercropping',
      'Organic farming',
      'Soil conservation',
    ],
    research_development: {
      focus_areas: ['Early-bearing varieties', 'Value-addition technologies'],
    },
    case_studies: [
      {
        title: 'Clove-based Agroforestry in Matara District',
        summary: 'Farmers increased land productivity by 60% through multi-tier cropping.',
      },
    ],
    resources_support: {
      government_agencies: ['Department of Export Agriculture', 'Spice Research Station'],
      farmer_organizations: ['Clove Growers Association'],
    },
    faqs: [
      {
        question: 'How do I know when cloves are ready for harvesting?',
        answer: 'Harvest when the buds turn from green to pinkish-red, but before they open into flowers.',
      },
    ],
    multimedia_resources: {
      harvesting_guide_video: 'https://example.com/clove_harvesting_guide.mp4',
      quality_assessment_app: 'https://example.com/clove_quality_checker',
      market_information_system: 'https://example.com/clove_market_info',
    },
  },
  {
    id: '9',
    name: 'Vegetables',
    introduction: 'Various vegetables are grown across Sri Lanka for local consumption and export.',
    photo: cropImg9,
    climate_soil_requirements: {
      temperature: '15-35°C (varies by crop)',
      rainfall: '1000-2500mm annually',
      soil_type: 'Well-drained, fertile soils',
    },
    planting: {
      method: 'Direct seeding or transplanting',
      season: 'Year-round with irrigation',
    },
    cultivation_practices: {
      spacing: 'Varies by crop',
      fertilization: 'Balanced NPK and organic matter',
    },
    pest_disease_management: {
      pests: ['Aphids', 'Whiteflies', 'Fruit flies'],
      diseases: ['Fungal wilts', 'Viral diseases'],
      control_methods: ['Integrated Pest Management', 'Crop rotation'],
    },
    harvesting: {
      method: 'Manual harvesting',
      time: 'Varies by crop (20-120 days)',
    },
    yield_economics: {
      average_yield: 'Varies by crop',
      market_price: 'Fluctuates based on supply and demand',
    },
    processing_value_addition: {
      products: ['Fresh vegetables', 'Dried vegetables', 'Pickles'],
    },
    sustainability_practices: [
      'Organic farming',
      'Integrated farming systems',
      'Protected cultivation',
    ],
    research_development: {
      focus_areas: ['Pest-resistant varieties', 'Off-season production'],
    },
    case_studies: [
      {
        title: 'Protected Vegetable Cultivation in Nuwara Eliya',
        summary: 'Farmers increased yields by 40% and reduced pesticide use through greenhouse technology.',
      },
    ],
    resources_support: {
      government_agencies: ['Department of Agriculture', 'Horticultural Crop Research Institute'],
      farmer_organizations: ['All Island Farmers\' Federation'],
    },
    faqs: [
      {
        question: 'What are the best vegetables to grow in home gardens?',
        answer: 'Easy-to-grow vegetables include tomatoes, green chilies, okra, and leafy greens like spinach and kale.',
      },
    ],
    multimedia_resources: {
      crop_planning_tool: 'https://example.com/vegetable_crop_planner',
      pest_identification_app: 'https://example.com/vegetable_pest_identifier',
      market_price_information: 'https://example.com/vegetable_market_prices',
    },
  },
  {
    id: '10',
    name: 'Fruits',
    introduction: 'Sri Lanka produces a variety of tropical fruits for local consumption and export.',
    photo: cropImg10,
    climate_soil_requirements: {
      temperature: '20-35°C (varies by crop)',
      rainfall: '1000-3000mm annually',
      soil_type: 'Well-drained, fertile soils',
    },
    planting: {
      method: 'Seedlings or grafted plants',
      season: 'Beginning of rainy season',
    },
    cultivation_practices: {
      spacing: 'Varies by crop (3-10 meters)',
      pruning: 'Regular pruning for most tree fruits',
    },
    pest_disease_management: {
      pests: ['Fruit flies', 'Mealybugs'],
      diseases: ['Anthracnose', 'Powdery mildew'],
      control_methods: ['Integrated Pest Management', 'Bagging fruits'],
    },
    harvesting: {
      method: 'Manual harvesting at proper maturity',
      time: 'Varies by crop and variety',
    },
    yield_economics: {
      average_yield: 'Varies by crop and management',
      market_price: 'Seasonal fluctuations',
    },
    processing_value_addition: {
      products: ['Fresh fruits', 'Dried fruits', 'Fruit juices', 'Jams'],
    },
    sustainability_practices: [
      'Integrated farming',
      'Water conservation',
      'Organic fruit production',
    ],
    research_development: {
      focus_areas: ['Disease-resistant varieties', 'Post-harvest technology'],
    },
    case_studies: [
      {
        title: 'Mango Export Success in Hambantota District',
        summary: 'Farmers increased income by 50% through improved post-harvest handling and export market access.',
      },
    ],
    resources_support: {
      government_agencies: ['Fruit Research and Development Institute', 'Department of Agriculture'],
      farmer_organizations: ['Fruit Growers Association'],
    },
    faqs: [
      {
        question: 'How can I prevent fruit fly damage in my orchard?',
        answer: 'Use pheromone traps, practice orchard sanitation, and consider fruit bagging for high-value crops.',
      },
    ],
    multimedia_resources: {
      orchard_management_course: 'https://example.com/fruit_orchard_management',
      ripeness_detector_app: 'https://example.com/fruit_ripeness_checker',
      export_market_guide: 'https://example.com/fruit_export_guide',
    },
  },
  {
    id: '11',
    name: 'Cashew',
    introduction: 'Cashew is grown as a plantation crop in Sri Lanka\'s dry and intermediate zones.',
    photo: cropImg11,
    climate_soil_requirements: {
      temperature: '20-35°C',
      rainfall: '1000-2000mm annually',
      soil_type: 'Well-drained sandy or red loamy soils',
    },
    planting: {
      method: 'Seedlings or grafted plants',
      season: 'Beginning of rainy season',
    },
    cultivation_practices: {
      spacing: '7-10 meters between plants',
      pruning: 'Formative pruning in early years',
    },
    pest_disease_management: {
      pests: ['Tea mosquito bug', 'Stem and root borer'],
      diseases: ['Anthracnose', 'Dieback'],
      control_methods: ['Integrated Pest Management', 'Pruning infected parts'],
    },
    harvesting: {
      method: 'Manual collection of fallen fruits',
      time: '3-5 years after planting, then annually',
    },
    yield_economics: {
      average_yield: '500-1000 kg of raw nuts per hectare',
      market_price: 'Varies based on kernel quality',
    },
    processing_value_addition: {
      products: ['Cashew kernels', 'Cashew nut shell liquid', 'Cashew apple products'],
    },
    sustainability_practices: [
      'Intercropping',
      'Soil conservation',
      'Organic cultivation',
    ],
    research_development: {
      focus_areas: ['High-yielding varieties', 'Mechanization of processing'],
    },
    case_studies: [
      {
        title: 'Cashew-based Agroforestry in Puttalam District',
        summary: 'Farmers increased land productivity by 70% through intercropping with short-term crops.',
      },
    ],
    resources_support: {
      government_agencies: ['Cashew Corporation', 'Department of Export Agriculture'],
      farmer_organizations: ['Cashew Growers Association'],
    },
    faqs: [
      {
        question: 'How can I improve the yield of my cashew trees?',
        answer: 'Ensure proper spacing, regular pruning, adequate fertilization, and effective pest management.',
      },
    ],
    multimedia_resources: {
      cultivation_guide_video: 'https://example.com/cashew_cultivation_guide.mp4',
      processing_technology_demo: 'https://example.com/cashew_processing_tech',
      market_information_system: 'https://example.com/cashew_market_info',
    },


    id: '1',
      name: 'Rice',
      introduction: 'Rice is the staple food crop of Sri Lanka, cultivated extensively throughout the country.',
      photo: cropImg1,
      climate_soil_requirements: {
        temperature: '20-35°C',
        rainfall: '1000-2000mm annually',
        soil_type: 'Clay or clay loam soils',
      },
      planting: {
        method: 'Direct seeding or transplanting',
        season: 'Maha (October-March) and Yala (April-September)',
      },
      cultivation_practices: {
        irrigation: 'Flood irrigation or alternate wetting and drying',
        fertilization: 'NPK application based on soil testing',
      },
      pest_disease_management: {
        pests: ['Brown planthopper', 'Stem borer'],
        diseases: ['Blast', 'Bacterial leaf blight'],
        control_methods: ['Integrated Pest Management', 'Resistant varieties'],
      },
      harvesting: {
        method: 'Manual or mechanical harvesting',
        time: '90-120 days after planting, depending on variety',
      },
      yield_economics: {
        average_yield: '4-5 tons per hectare',
        market_price: 'Varies based on variety and quality',
      },
      processing_value_addition: {
        products: ['Rice flour', 'Rice noodles', 'Rice bran oil'],
      },
      sustainability_practices: [
        'Water-saving techniques',
        'Organic farming methods',
        'Crop rotation',
      ],
      research_development: {
        focus_areas: ['Drought-resistant varieties', 'Pest management'],
      },
      case_studies: [
        {
          title: 'Success of System of Rice Intensification in Ampara District',
          summary: 'Farmers achieved 30% higher yields with reduced water usage.',
        },
      ],
      resources_support: {
        government_agencies: ['Department of Agriculture', 'Rice Research Institute'],
        farmer_organizations: ['All Ceylon Peasants\' Federation'],
      },
      faqs: [
        {
          question: 'What are the best rice varieties for drought-prone areas?',
          answer: 'Drought-tolerant varieties like BG 300 and BG 350 are recommended.',
        },
      ],
      multimedia_resources: {
        planting_guide_video: 'https://example.com/rice_planting_guide.mp4',
        pest_identification_app: 'https://example.com/rice_pest_app',
        yield_calculator: 'https://example.com/rice_yield_calculator',
      },
    },
    {
      id: '2',
      name: 'Tea',
      introduction: 'Tea is a major export crop of Sri Lanka, known worldwide for its quality and flavor.',
      photo: cropImg2,
      climate_soil_requirements: {
        temperature: '18-25°C',
        rainfall: '1500-2500mm annually',
        soil_type: 'Well-drained, acidic soils',
      },
      planting: {
        method: 'Seedlings or vegetative propagation',
        season: 'Year-round, preferably at the onset of rainy season',
      },
      cultivation_practices: {
        pruning: 'Regular pruning to maintain bush shape',
        fertilization: 'Balanced NPK application',
      },
      pest_disease_management: {
        pests: ['Tea mosquito bug', 'Red spider mite'],
        diseases: ['Blister blight', 'Root rot'],
        control_methods: ['Integrated Pest Management', 'Biological control'],
      },
      harvesting: {
        method: 'Hand plucking of two leaves and a bud',
        frequency: 'Every 7-14 days',
      },
      yield_economics: {
        average_yield: '1500-2000 kg of made tea per hectare per year',
        market_price: 'Varies based on grade and quality',
      },
      processing_value_addition: {
        products: ['Black tea', 'Green tea', 'White tea', 'Flavored teas'],
      },
      sustainability_practices: [
        'Rainforest Alliance certification',
        'Organic tea cultivation',
        'Soil conservation measures',
      ],
      research_development: {
        focus_areas: ['Climate-resilient varieties', 'Mechanization of harvesting'],
      },
      case_studies: [
        {
          title: 'Organic Tea Production in Uva Province',
          summary: 'Small-scale farmers increased profits by 40% through organic certification.',
        },
      ],
      resources_support: {
        government_agencies: ['Tea Research Institute', 'Sri Lanka Tea Board'],
        farmer_organizations: ['Tea Small Holdings Development Authority'],
      },
      faqs: [
        {
          question: 'How can I improve the quality of my tea leaves?',
          answer: 'Focus on proper plucking techniques, timely processing, and maintaining hygiene during processing.',
        },
      ],
      multimedia_resources: {
        pruning_techniques_video: 'https://example.com/tea_pruning_guide.mp4',
        tea_tasting_course: 'https://example.com/tea_tasting_online_course',
        quality_grading_app: 'https://example.com/tea_quality_grading_app',
      },
    },
    {
      id: '3',
      name: 'Coconut',
      introduction: 'Coconut is a versatile crop with numerous uses in food, industry, and export.',
      photo: cropImg3,
      climate_soil_requirements: {
        temperature: '20-35°C',
        rainfall: '1500-2500mm annually',
        soil_type: 'Well-drained sandy or loamy soils',
      },
      planting: {
        method: 'Seedling transplantation',
        season: 'Beginning of rainy season',
      },
      cultivation_practices: {
        spacing: '7-9 meters between plants',
        fertilization: 'Organic and inorganic fertilizers',
      },
      pest_disease_management: {
        pests: ['Rhinoceros beetle', 'Red palm weevil'],
        diseases: ['Bud rot', 'Stem bleeding'],
        control_methods: ['Integrated Pest Management', 'Pheromone traps'],
      },
      harvesting: {
        method: 'Manual harvesting using poles or climbing',
        frequency: 'Every 45-60 days',
      },
      yield_economics: {
        average_yield: '50-60 nuts per palm per year',
        market_price: 'Varies based on market demand',
      },
      processing_value_addition: {
        products: ['Coconut oil', 'Desiccated coconut', 'Coir products'],
      },
      sustainability_practices: [
        'Intercropping',
        'Organic farming',
        'Water conservation',
      ],
      research_development: {
        focus_areas: ['Drought-resistant varieties', 'Disease management'],
      },
      case_studies: [
        {
          title: 'Coconut-based agroforestry in Kurunegala District',
          summary: 'Farmers increased income by 50% through diversification with intercrops.',
        },
      ],
      resources_support: {
        government_agencies: ['Coconut Development Authority', 'Coconut Research Institute'],
        farmer_organizations: ['Coconut Growers Association'],
      },
      faqs: [
        {
          question: 'How long does it take for a coconut tree to bear fruit?',
          answer: 'Typically, coconut trees start bearing fruit 6-10 years after planting, depending on the variety and growing conditions.',
        },
      ],
      multimedia_resources: {
        planting_guide_video: 'https://example.com/coconut_planting_guide.mp4',
        pest_management_app: 'https://example.com/coconut_pest_management_app',
        value_addition_course: 'https://example.com/coconut_products_course',
      },
    },
    {
      id: '4',
      name: 'Rubber',
      introduction: 'Rubber is an important industrial and export crop in Sri Lanka.',
      photo: cropImg4,
      climate_soil_requirements: {
        temperature: '20-30°C',
        rainfall: '2000-3000mm annually',
        soil_type: 'Well-drained loamy soils',
      },
      planting: {
        method: 'Budded stumps',
        season: 'Beginning of rainy season',
      },
      cultivation_practices: {
        spacing: '5-6 meters between plants',
        fertilization: 'NPK application based on soil testing',
      },
      pest_disease_management: {
        pests: ['Termites', 'White grubs'],
        diseases: ['White root disease', 'Leaf fall disease'],
        control_methods: ['Chemical control', 'Cultural practices'],
      },
      harvesting: {
        method: 'Tapping',
        frequency: 'Every 2-3 days',
      },
      yield_economics: {
        average_yield: '1000-1500 kg of dry rubber per hectare per year',
        market_price: 'Fluctuates based on global demand',
      },
      processing_value_addition: {
        products: ['Latex products', 'Rubber sheets', 'Rubber wood'],
      },
      sustainability_practices: [
        'Agroforestry',
        'Rainwater harvesting',
        'Rubber wood utilization',
      ],
      research_development: {
        focus_areas: ['High-yielding clones', 'Disease-resistant varieties'],
      },
      case_studies: [
        {
          title: 'Rubber-based agroforestry in Ratnapura District',
          summary: 'Smallholders increased income by 30% through intercropping with tea and fruit trees.',
        },
      ],
      resources_support: {
        government_agencies: ['Rubber Research Institute', 'Rubber Development Department'],
        farmer_organizations: ['Rubber Smallholders Development Society'],
      },
      faqs: [
        {
          question: 'When can I start tapping a rubber tree?',
          answer: 'Rubber trees are usually ready for tapping when they reach a girth of 45-50 cm at a height of 120 cm from the ground, typically 5-7 years after planting.',
        },
      ],
      multimedia_resources: {
        tapping_technique_video: 'https://example.com/rubber_tapping_guide.mp4',
        clone_selection_app: 'https://example.com/rubber_clone_selector',
        market_price_tracker: 'https://example.com/rubber_price_tracker',
      },
    },
    {
      id: '5',
      name: 'Cinnamon',
      introduction: 'Ceylon Cinnamon is a high-value spice crop and major export of Sri Lanka.',
      photo: cropImg5,
      climate_soil_requirements: {
        temperature: '25-30°C',
        rainfall: '1500-2500mm annually',
        soil_type: 'Well-drained sandy loam to lateritic soils',
      },
      planting: {
        method: 'Seedlings or stem cuttings',
        season: 'Beginning of rainy season',
      },
      cultivation_practices: {
        spacing: '1.2-1.8 meters between plants',
        pruning: 'Regular pruning to encourage straight stem growth',
      },
      pest_disease_management: {
        pests: ['Shoot borer', 'Leaf miner'],
        diseases: ['Leaf spot', 'Die-back'],
        control_methods: ['Integrated Pest Management', 'Pruning infected parts'],
      },
      harvesting: {
        method: 'Peeling of bark from stems',
        time: '2-3 years after planting, then every 12-18 months',
      },
      yield_economics: {
        average_yield: '400-500 kg of dried quills per hectare per year',
        market_price: 'Premium for high-quality Ceylon Cinnamon',
      },
      processing_value_addition: {
        products: ['Cinnamon quills', 'Cinnamon oil', 'Cinnamon powder'],
      },
      sustainability_practices: [
        'Organic cultivation',
        'Agroforestry systems',
        'Soil conservation',
      ],
      research_development: {
        focus_areas: ['High-yielding varieties', 'Mechanization of peeling'],
      },
      case_studies: [
        {
          title: 'Organic Cinnamon Production in Galle District',
          summary: 'Farmers achieved 25% price premium through organic certification.',
        },
      ],
      resources_support: {
        government_agencies: ['Department of Export Agriculture', 'Cinnamon Research Station'],
        farmer_organizations: ['Cinnamon Growers Association'],
      },
      faqs: [
        {
          question: 'How can I improve the quality of my cinnamon quills?',
          answer: 'Focus on proper peeling techniques, quick drying to prevent mold, and maintaining hygiene during processing.',
        },
      ],
      multimedia_resources: {
        peeling_technique_video: 'https://example.com/cinnamon_peeling_guide.mp4',
        quality_grading_app: 'https://example.com/cinnamon_quality_grader',
        market_linkage_platform: 'https://example.com/cinnamon_market_connect',
      },
    },
    {
      id: '6',
      name: 'Black Pepper',
      introduction: 'Black pepper is a high-value spice crop grown in Sri Lanka\'s wet and intermediate zones.',
      photo: cropImg6,
      climate_soil_requirements: {
        temperature: '20-30°C',
        rainfall: '1500-3000mm annually',
        soil_type: 'Well-drained, organic-rich soils',
      },
      planting: {
        method: 'Stem cuttings',
        season: 'Beginning of rainy season',
      },
      cultivation_practices: {
        spacing: '2-3 meters between plants',
        support: 'Living or non-living standards',
      },
      pest_disease_management: {
        pests: ['Pollu beetle', 'Scale insects'],
        diseases: ['Quick wilt', 'Slow decline'],
        control_methods: ['Integrated Pest Management', 'Phytosanitation'],
      },
      harvesting: {
        method: 'Hand picking of mature spikes',
        time: '6-8 months after flowering',
      },
      yield_economics: {
        average_yield: '1-2 kg of dried pepper per vine per year',
        market_price: 'Varies based on quality and global demand',
      },
      processing_value_addition: {
        products: ['Black pepper', 'White pepper', 'Green pepper'],
      },
      sustainability_practices: [
        'Organic farming',
        'Intercropping',
        'Rainwater harvesting',
      ],
      research_development: {
        focus_areas: ['Disease-resistant varieties', 'Improved processing techniques'],
      },
      case_studies: [
        {
          title: 'Integrated Farming with Black Pepper in Matale District',
          summary: 'Farmers increased overall farm income by 40% through diversification.',
        },
      ],
      resources_support: {
        government_agencies: ['Department of Export Agriculture', 'Spice Research Station'],
        farmer_organizations: ['Pepper Producers Association'],
      },
      faqs: [
        {
          question: 'What are the best practices for post-harvest handling of black pepper?',
          answer: 'Quick drying to prevent mold growth, proper storage in clean, dry conditions, and grading based on size and quality.',
        },
    ],
    multimedia_resources: {
      cultivation_guide_video: 'https://example.com/black_pepper_cultivation_guide.mp4',
      disease_identification_app: 'https://example.com/pepper_disease_identifier',
      market_price_tracker: 'https://example.com/pepper_price_tracker',
    },
  },
  {
    id: '7',
    name: 'Cardamom',
    introduction: 'Cardamom is a high-value spice crop grown in Sri Lanka\'s central highlands.',
    photo: cropImg7,
    climate_soil_requirements: {
      temperature: '10-35°C',
      rainfall: '1500-2500mm annually',
      soil_type: 'Well-drained, humus-rich soils',
    },
    planting: {
      method: 'Rhizome splitting or seedlings',
      season: 'Beginning of monsoon season',
    },
    cultivation_practices: {
      spacing: '2-3 meters between plants',
      shade: 'Requires 40-60% shade',
    },
    pest_disease_management: {
      pests: ['Thrips', 'Root grubs'],
      diseases: ['Rhizome rot', 'Capsule rot'],
      control_methods: ['Integrated Pest Management', 'Proper drainage'],
    },
    harvesting: {
      method: 'Hand picking of mature capsules',
      time: '18-20 months after planting',
    },
    yield_economics: {
      average_yield: '150-200 kg of dried cardamom per hectare',
      market_price: 'Premium for high-quality pods',
    },
    processing_value_addition: {
      products: ['Dried cardamom pods', 'Cardamom oil', 'Cardamom powder'],
    },
    sustainability_practices: [
      'Agroforestry',
      'Organic cultivation',
      'Soil conservation',
    ],
    research_development: {
      focus_areas: ['High-yielding varieties', 'Post-harvest technology'],
    },
    case_studies: [
      {
        title: 'Organic Cardamom Farming in Knuckles Range',
        summary: 'Farmers achieved 30% higher prices through organic certification.',
      },
    ],
    resources_support: {
      government_agencies: ['Department of Export Agriculture', 'Spice Research Station'],
      farmer_organizations: ['Cardamom Growers Association'],
    },
    faqs: [
      {
        question: 'How can I improve the quality of my cardamom?',
        answer: 'Focus on proper shade management, timely harvesting, and quick drying to preserve aroma and color.',
      },
    ],
    multimedia_resources: {
      cultivation_guide_video: 'https://example.com/cardamom_cultivation_guide.mp4',
      disease_identification_app: 'https://example.com/cardamom_disease_identifier',
      market_price_tracker: 'https://example.com/cardamom_price_tracker',
    },
  },
  {
    id: '8',
    name: 'Cloves',
    introduction: 'Cloves are aromatic flower buds used as a spice, grown in Sri Lanka\'s wet zone.',
    photo: cropImg8,
    climate_soil_requirements: {
      temperature: '20-30°C',
      rainfall: '1500-2500mm annually',
      soil_type: 'Well-drained, deep loamy soils',
    },
    planting: {
      method: 'Seedlings',
      season: 'Beginning of rainy season',
    },
    cultivation_practices: {
      spacing: '6-7 meters between plants',
      pruning: 'Minimal pruning required',
    },
    pest_disease_management: {
      pests: ['Stem borer', 'Scale insects'],
      diseases: ['Leaf spot', 'Root rot'],
      control_methods: ['Integrated Pest Management', 'Cultural practices'],
    },
    harvesting: {
      method: 'Hand picking of mature buds',
      time: '6-8 years after planting, then annually',
    },
    yield_economics: {
      average_yield: '3-5 kg of dried cloves per tree per year',
      market_price: 'Varies based on global demand',
    },
    processing_value_addition: {
      products: ['Dried clove buds', 'Clove oil', 'Clove powder'],
    },
    sustainability_practices: [
      'Intercropping',
      'Organic farming',
      'Soil conservation',
    ],
    research_development: {
      focus_areas: ['Early-bearing varieties', 'Value-addition technologies'],
    },
    case_studies: [
      {
        title: 'Clove-based Agroforestry in Matara District',
        summary: 'Farmers increased land productivity by 60% through multi-tier cropping.',
      },
    ],
    resources_support: {
      government_agencies: ['Department of Export Agriculture', 'Spice Research Station'],
      farmer_organizations: ['Clove Growers Association'],
    },
    faqs: [
      {
        question: 'How do I know when cloves are ready for harvesting?',
        answer: 'Harvest when the buds turn from green to pinkish-red, but before they open into flowers.',
      },
    ],
    multimedia_resources: {
      harvesting_guide_video: 'https://example.com/clove_harvesting_guide.mp4',
      quality_assessment_app: 'https://example.com/clove_quality_checker',
      market_information_system: 'https://example.com/clove_market_info',
    },
  },
  {
    id: '9',
    name: 'Vegetables',
    introduction: 'Various vegetables are grown across Sri Lanka for local consumption and export.',
    photo: cropImg9,
    climate_soil_requirements: {
      temperature: '15-35°C (varies by crop)',
      rainfall: '1000-2500mm annually',
      soil_type: 'Well-drained, fertile soils',
    },
    planting: {
      method: 'Direct seeding or transplanting',
      season: 'Year-round with irrigation',
    },
    cultivation_practices: {
      spacing: 'Varies by crop',
      fertilization: 'Balanced NPK and organic matter',
    },
    pest_disease_management: {
      pests: ['Aphids', 'Whiteflies', 'Fruit flies'],
      diseases: ['Fungal wilts', 'Viral diseases'],
      control_methods: ['Integrated Pest Management', 'Crop rotation'],
    },
    harvesting: {
      method: 'Manual harvesting',
      time: 'Varies by crop (20-120 days)',
    },
    yield_economics: {
      average_yield: 'Varies by crop',
      market_price: 'Fluctuates based on supply and demand',
    },
    processing_value_addition: {
      products: ['Fresh vegetables', 'Dried vegetables', 'Pickles'],
    },
    sustainability_practices: [
      'Organic farming',
      'Integrated farming systems',
      'Protected cultivation',
    ],
    research_development: {
      focus_areas: ['Pest-resistant varieties', 'Off-season production'],
    },
    case_studies: [
      {
        title: 'Protected Vegetable Cultivation in Nuwara Eliya',
        summary: 'Farmers increased yields by 40% and reduced pesticide use through greenhouse technology.',
      },
    ],
    resources_support: {
      government_agencies: ['Department of Agriculture', 'Horticultural Crop Research Institute'],
      farmer_organizations: ['All Island Farmers\' Federation'],
    },
    faqs: [
      {
        question: 'What are the best vegetables to grow in home gardens?',
        answer: 'Easy-to-grow vegetables include tomatoes, green chilies, okra, and leafy greens like spinach and kale.',
      },
    ],
    multimedia_resources: {
      crop_planning_tool: 'https://example.com/vegetable_crop_planner',
      pest_identification_app: 'https://example.com/vegetable_pest_identifier',
      market_price_information: 'https://example.com/vegetable_market_prices',
    },
  },
  {
    id: '10',
    name: 'Fruits',
    introduction: 'Sri Lanka produces a variety of tropical fruits for local consumption and export.',
    photo: cropImg10,
    climate_soil_requirements: {
      temperature: '20-35°C (varies by crop)',
      rainfall: '1000-3000mm annually',
      soil_type: 'Well-drained, fertile soils',
    },
    planting: {
      method: 'Seedlings or grafted plants',
      season: 'Beginning of rainy season',
    },
    cultivation_practices: {
      spacing: 'Varies by crop (3-10 meters)',
      pruning: 'Regular pruning for most tree fruits',
    },
    pest_disease_management: {
      pests: ['Fruit flies', 'Mealybugs'],
      diseases: ['Anthracnose', 'Powdery mildew'],
      control_methods: ['Integrated Pest Management', 'Bagging fruits'],
    },
    harvesting: {
      method: 'Manual harvesting at proper maturity',
      time: 'Varies by crop and variety',
    },
    yield_economics: {
      average_yield: 'Varies by crop and management',
      market_price: 'Seasonal fluctuations',
    },
    processing_value_addition: {
      products: ['Fresh fruits', 'Dried fruits', 'Fruit juices', 'Jams'],
    },
    sustainability_practices: [
      'Integrated farming',
      'Water conservation',
      'Organic fruit production',
    ],
    research_development: {
      focus_areas: ['Disease-resistant varieties', 'Post-harvest technology'],
    },
    case_studies: [
      {
        title: 'Mango Export Success in Hambantota District',
        summary: 'Farmers increased income by 50% through improved post-harvest handling and export market access.',
      },
    ],
    resources_support: {
      government_agencies: ['Fruit Research and Development Institute', 'Department of Agriculture'],
      farmer_organizations: ['Fruit Growers Association'],
    },
    faqs: [
      {
        question: 'How can I prevent fruit fly damage in my orchard?',
        answer: 'Use pheromone traps, practice orchard sanitation, and consider fruit bagging for high-value crops.',
      },
    ],
    multimedia_resources: {
      orchard_management_course: 'https://example.com/fruit_orchard_management',
      ripeness_detector_app: 'https://example.com/fruit_ripeness_checker',
      export_market_guide: 'https://example.com/fruit_export_guide',
    },
  },
  {
    id: '11',
    name: 'Cashew',
    introduction: 'Cashew is grown as a plantation crop in Sri Lanka\'s dry and intermediate zones.',
    photo: cropImg11,
    climate_soil_requirements: {
      temperature: '20-35°C',
      rainfall: '1000-2000mm annually',
      soil_type: 'Well-drained sandy or red loamy soils',
    },
    planting: {
      method: 'Seedlings or grafted plants',
      season: 'Beginning of rainy season',
    },
    cultivation_practices: {
      spacing: '7-10 meters between plants',
      pruning: 'Formative pruning in early years',
    },
    pest_disease_management: {
      pests: ['Tea mosquito bug', 'Stem and root borer'],
      diseases: ['Anthracnose', 'Dieback'],
      control_methods: ['Integrated Pest Management', 'Pruning infected parts'],
    },
    harvesting: {
      method: 'Manual collection of fallen fruits',
      time: '3-5 years after planting, then annually',
    },
    yield_economics: {
      average_yield: '500-1000 kg of raw nuts per hectare',
      market_price: 'Varies based on kernel quality',
    },
    processing_value_addition: {
      products: ['Cashew kernels', 'Cashew nut shell liquid', 'Cashew apple products'],
    },
    sustainability_practices: [
      'Intercropping',
      'Soil conservation',
      'Organic cultivation',
    ],
    research_development: {
      focus_areas: ['High-yielding varieties', 'Mechanization of processing'],
    },
    case_studies: [
      {
        title: 'Cashew-based Agroforestry in Puttalam District',
        summary: 'Farmers increased land productivity by 70% through intercropping with short-term crops.',
      },
    ],
    resources_support: {
      government_agencies: ['Cashew Corporation', 'Department of Export Agriculture'],
      farmer_organizations: ['Cashew Growers Association'],
    },
    faqs: [
      {
        question: 'How can I improve the yield of my cashew trees?',
        answer: 'Ensure proper spacing, regular pruning, adequate fertilization, and effective pest management.',
      },
    ],
    multimedia_resources: {
      cultivation_guide_video: 'https://example.com/cashew_cultivation_guide.mp4',
      processing_technology_demo: 'https://example.com/cashew_processing_tech',
      market_information_system: 'https://example.com/cashew_market_info',
    },
  },
];
  
  export default cropData;
  