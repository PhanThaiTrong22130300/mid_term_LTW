package vn.edu.hcmuaf.fit.doanwebbanvi.service;

import vn.edu.hcmuaf.fit.doanwebbanvi.dao.ProductDao;
import vn.edu.hcmuaf.fit.doanwebbanvi.dao.model.Product;

import java.util.List;

public class ProductService {
    static ProductDao productDao= new ProductDao();
    public List<Product> getAll(){
        List<Product> all = productDao.getAll();
        return all;
    }
    public Product getDetail(String in){
        try{
            int id = Integer.parseInt(in);
            return productDao.getByID(id);
        }catch (NumberFormatException e){
            return null;
        }
    }
}
