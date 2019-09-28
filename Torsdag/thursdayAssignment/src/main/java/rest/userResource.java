/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.Gson;
import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 *
 * @author willi
 */

class User {
        public String name;
        User(String name) {
            this.name = name;
        }
    }
@Path("user")
public class userResource {
    
    
   

    public static List<User> users = new ArrayList();
    public Gson gson = new Gson();

    public userResource() {
    }
    
    @GET
    @Path("/all")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllUsers() {
        return Response.ok(gson.toJson(users)).build();
    }
    
    @GET
    @Path("/id/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUserById(@PathParam("id") int id) {
        return Response.ok(gson.toJson(users.get(id-1))).build();
    }
    
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response addUser(String user) {
        User u = gson.fromJson(user, User.class);
        users.add(u);
        return Response.ok(gson.toJson(u)).build();
    }
    
    @PUT
    @Path("/edit/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response editUser(@PathParam("id") int id, String user) {
        users.get(id-1).name = gson.fromJson(user, User.class).name;
        return Response.ok(gson.toJson(users.get(id-1))).build();
    }
    
    @DELETE
    @Path("/delete/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response deleteUser(@PathParam("id") int id) {
        users.remove(id-1);
        return Response.ok("Deleted user with id " + id).build();
    }
    
}
