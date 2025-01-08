package vn.edu.hcmuaf.fit.doanwebbanvi.controller;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import vn.edu.hcmuaf.fit.doanwebbanvi.dao.model.Product;
import vn.edu.hcmuaf.fit.doanwebbanvi.service.ProductService;

import java.io.IOException;

@WebServlet(name = "Detail", value = "/product-detail")
public class Detail extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String id = request.getParameter("pid");
        ProductService productService = new ProductService();
        Product detail = productService.getDetail(id);
        request.setAttribute("detail", detail);
        request.getRequestDispatcher("chi-tiet-sp.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    }
}



    