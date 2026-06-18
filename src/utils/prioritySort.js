export const prioritySort = (notifications) => {

  const priority = {
    Placement: 3,
    Result: 2,
    Event: 1
  };

  return [...notifications].sort((a, b) => {

    if (priority[a.Type] !== priority[b.Type]) {
      return priority[b.Type] - priority[a.Type];
    }

    return new Date(b.Timestamp) - new Date(a.Timestamp);
  });
};