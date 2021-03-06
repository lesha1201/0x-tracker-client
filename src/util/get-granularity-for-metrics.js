const getGranularityForMetrics = (metrics) => {
  const dateA = metrics[0].date;
  const dateB = metrics[1].date;

  const diff = dateB - dateA;

  if (diff === 3600000) {
    return 'hour';
  }

  if (diff === 86400000) {
    return 'day';
  }

  if (diff === 604800000) {
    return 'week';
  }

  if (diff === 2678400000) {
    return 'month';
  }

  throw new Error('Unsupported metrics granularity');
};

export default getGranularityForMetrics;
