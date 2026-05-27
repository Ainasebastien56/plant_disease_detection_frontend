export const DISEASE_DATA: Record<string, { scientificName: string; severity: 'LOW' | 'MODERATE' | 'SEVERE'; treatments: string[] }> = {

  // CORN
  'Corn_(maize)___Common_rust_': {
    scientificName: 'Puccinia sorghi',
    severity: 'MODERATE',
    treatments: [
      'Apply fungicides containing azoxystrobin or propiconazole.',
      'Remove and destroy heavily infected leaves.',
      'Plant rust-resistant corn varieties next season.'
    ]
  },
  'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot': {
    scientificName: 'Cercospora zeae-maydis',
    severity: 'MODERATE',
    treatments: [
      'Apply foliar fungicides at early sign of infection.',
      'Improve air circulation by spacing plants adequately.',
      'Rotate crops to reduce pathogen buildup in soil.'
    ]
  },
  'Corn_(maize)___Northern_Leaf_Blight': {
    scientificName: 'Exserohilum turcicum',
    severity: 'SEVERE',
    treatments: [
      'Apply fungicides at tasseling stage.',
      'Use resistant hybrids in future plantings.',
      'Remove infected crop debris after harvest.'
    ]
  },
  'Corn_(maize)___healthy': {
    scientificName: '-',
    severity: 'LOW',
    treatments: ['Your plant is healthy! Continue regular watering and monitoring.']
  },

  // TOMATO
  'Tomato___Late_blight': {
    scientificName: 'Phytophthora infestans',
    severity: 'SEVERE',
    treatments: [
      'Immediately remove and destroy infected foliage to prevent spore spread.',
      'Apply copper-based fungicides as a preventative measure.',
      'Improve air circulation by pruning and adjust watering to keep leaves dry.'
    ]
  },
  'Tomato___Early_blight': {
    scientificName: 'Alternaria solani',
    severity: 'MODERATE',
    treatments: [
      'Remove lower infected leaves immediately.',
      'Apply mancozeb or chlorothalonil-based fungicides.',
      'Avoid overhead watering — water at the base.'
    ]
  },
  'Tomato___Leaf_Mold': {
    scientificName: 'Passalora fulva',
    severity: 'MODERATE',
    treatments: [
      'Reduce humidity by improving greenhouse ventilation.',
      'Apply copper fungicides weekly.',
      'Remove and burn infected plant material.'
    ]
  },
  'Tomato___healthy': {
    scientificName: '-',
    severity: 'LOW',
    treatments: ['Your plant is healthy! Continue regular watering and monitoring.']
  },
  'Tomato___Septoria_leaf_spot': {
    scientificName: 'Septoria lycopersici',
    severity: 'MODERATE',
    treatments: [
      'Remove and destroy infected leaves immediately.',
      'Apply fungicides containing chlorothalonil or mancozeb.',
      'Avoid overhead watering and ensure good air circulation.'
    ]
  },
  'Tomato___Spider_mites Two-spotted_spider_mite': {
    scientificName: 'Tetranychus urticae',
    severity: 'MODERATE',
    treatments: [
      'Apply miticides or insecticidal soap to affected plants.',
      'Increase humidity around plants — spider mites thrive in dry conditions.',
      'Introduce natural predators like predatory mites.'
    ]
  },
  'Tomato___Target_Spot': {
    scientificName: 'Corynespora cassiicola',
    severity: 'MODERATE',
    treatments: [
      'Apply fungicides containing azoxystrobin or trifloxystrobin.',
      'Remove infected leaves and avoid overhead irrigation.',
      'Rotate crops and remove plant debris after harvest.'
    ]
  },
  'Tomato___Tomato_mosaic_virus': {
    scientificName: 'Tomato mosaic virus (ToMV)',
    severity: 'SEVERE',
    treatments: [
      'Remove and destroy infected plants immediately — no cure exists.',
      'Disinfect tools and hands after handling infected plants.',
      'Use virus-resistant tomato varieties for future planting.'
    ]
  },
  'Tomato___Tomato_Yellow_Leaf_Curl_Virus': {
    scientificName: 'Tomato yellow leaf curl virus (TYLCV)',
    severity: 'SEVERE',
    treatments: [
      'Control whitefly populations with insecticides — they spread the virus.',
      'Remove and destroy infected plants to prevent further spread.',
      'Use reflective mulches to repel whiteflies and plant resistant varieties.'
    ]
  },

  // POTATO
  'Potato___Late_blight': {
    scientificName: 'Phytophthora infestans',
    severity: 'SEVERE',
    treatments: [
      'Destroy all infected plant material immediately.',
      'Apply preventative fungicides before wet weather.',
      'Avoid overhead irrigation to reduce leaf wetness.'
    ]
  },
  'Potato___Early_blight': {
    scientificName: 'Alternaria solani',
    severity: 'MODERATE',
    treatments: [
      'Apply fungicides containing chlorothalonil.',
      'Ensure adequate plant nutrition especially nitrogen.',
      'Remove infected leaves and avoid composting them.'
    ]
  },
  'Potato___healthy': {
    scientificName: '-',
    severity: 'LOW',
    treatments: ['Your plant is healthy! Continue regular watering and monitoring.']
  },

  // PEPPER
  'Pepper,_bell___Bacterial_spot': {
    scientificName: 'Xanthomonas campestris',
    severity: 'SEVERE',
    treatments: [
      'Apply copper-based bactericides at first sign of infection.',
      'Avoid working with plants when foliage is wet.',
      'Use certified disease-free seeds for next planting.'
    ]
  },
  'Pepper,_bell___healthy': {
    scientificName: '-',
    severity: 'LOW',
    treatments: ['Your plant is healthy! Continue regular watering and monitoring.']
  },
};