export  const dataState:DataStateType={
    pages:
    [
        {
            heading: 'qwer',
            about:'asdf'
        },
        {
            heading: 'asd',
            about:'zxc'
        },
        {
            heading: 'rty',
            about:'fff'
        }
    ]
}
export type PagesType={
    heading: string,
    about:string
}
export type DataStateType={
    pages: Array<PagesType>
}