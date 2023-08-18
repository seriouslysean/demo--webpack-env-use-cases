const features = {
    feature1: process.env.APP_ENABLE_FEATURE_1 === 'true'
        ? 'YEAH, IT IS!'
        : 'NO, IT IS NOT!',
    feature2: 'YEP!',
    feature3: 'NOPE!',
};

module.exports = {
    features,
};
