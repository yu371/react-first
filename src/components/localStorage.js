
export const setItem = (key,value) =>{
    localStorage.setItem(`${key}`,JSON.stringify(value));
}
export const getItem = (key) =>
{
    const value = localStorage.getItem(`${key}`)
    if(value === null)
    {    return null
    }
    else
    {
        return JSON.parse(value)
    }

};
export const removeItem =(key) =>
{
    localStorage.removeItem(`${key}`);
}