
export const getProducts = async () => {

    try{

        const response = await fetch("https://api-ecomerce-lovat.vercel.app/");

        if(!response.ok){
            return {"status" : "produto inválido"};
        }

        return response.json();

    } catch (err){
        console.log("Erro na requisição :" + err);
        return {"status" : "produto inválido"};

    }

}

export const getOnlyProduct = async (nameProduct) => {

    try{

        const response = await fetch(`https://api-ecomerce-lovat.vercel.app/${nameProduct}`);

        if(!response.ok){
            return {"status" : "produto inválido"};
        }

        return response.json();

    } catch (err){
        console.log("Erro na requisição :" + err);
        return {"status" : "produto inválido"};

    }

}