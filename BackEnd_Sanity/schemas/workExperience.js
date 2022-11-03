export default {
    name: 'workExperience',
    title: 'Work Experience',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'name',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'image',
            title: 'ImageUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'desc',
            title: 'Desc',
            type: 'string'
        }
    ]
}