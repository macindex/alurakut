import { SiteClient } from 'datocms-client';

export default async function recRequests(req, res) {
  if(req.method === 'POST') 
    {
      const TOKEN = '778bfe6aaa48acc0d65a06c947c7b8';
      const client = new SiteClient(TOKEN);
    
      const regCriado = await client.items.create({
        itemType: "976192",
        ...req.body,
        // title: "Comunidade teste",
        // imageUrl: "https://avatars.githubusercontent.com/u/7672997?v=4",
        // creatorSlug: "macindex"
      })
    
      res.json({
        dados: `Algum dado`,
        regCriado: regCriado,
      });
      return;
    }
    res.status(404).json({
      message: 'Nenhuma message no get'
    })
}
