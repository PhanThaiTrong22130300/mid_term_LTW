package vn.edu.hcmuaf.fit.doanwebbanvi.controller;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import vn.edu.hcmuaf.fit.doanwebbanvi.dao.model.Product;
import vn.edu.hcmuaf.fit.doanwebbanvi.service.ProductService;

import java.io.IOException;
import java.util.List;

@WebServlet(name = "ListProduct", value = "/san-pham")
public class ListProduct extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ProductService service = new ProductService();
        List<Product> all = service.getAll();
        request.setAttribute("products", all);
        request.getRequestDispatcher("san-pham.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    }
}



    