<?php
include "ClassCon.php";

class ClassCa extends ClassCon
{

    public function switcher($uri, $request)
    {
        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");

        switch ($uri) {
            case ('/create'):
                $this->create($request);
                break;
            case ('/getall'):
                $this->getAll($request);
                break;
            case ('/read'):
                $this->getOneMoive($request);
                break;
            case ('/update'):
                $this->updateAction($request);
                break;
            case ('/delete'):
                $this->deleteAction($request);
                break;
            default:
                echo "default";
                break;
        }
    }
    public function create($request)
    {
        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");

        $data = json_decode(file_get_contents('php://input'), true);

        $name = $data["name"];
        $year = $data["year"];
        $desc = $data["desc"];
        $image = $data["image"];

        $px = [
            'name' => $name,
            'year' => $year,
            'desc' => $desc,
            'image' => $image,
        ];
        $sql = "INSERT INTO `movies` (`name`, `year`, `desc`, `image`) VALUES (:name, :year, :desc, :image)";
        $stmt = $this->connectDb()->prepare($sql);
        $stmt->execute($px);
        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
    }
    public function getAll($request)
    {

        $BFetch = $this->connectDb()->prepare("select * from movies");
        $BFetch->execute();

        $J = [];
        $I = 0;

        while ($Fetch = $BFetch->fetch(PDO::FETCH_ASSOC)) {
            $J[$I] = [
                "id" => $Fetch['id'],
                "name" => $Fetch['name'],
                "year" => $Fetch['year'],
                "desc" => $Fetch['desc'],
                "image" => $Fetch['image'],
            ];
            $I++;
        }

        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        echo json_encode($J);
    }

    public function deleteAction($request)
    {

        $data = json_decode(file_get_contents('php://input'), true);

        $id = $data["id"];

        $sql = 'DELETE FROM `movies`
        WHERE id = :id';
        $statement = $this->connectDb()->prepare($sql);
        $statement->bindParam(':id', $id, PDO::PARAM_INT);

        // execute the statement
        if ($statement->execute()) {
            echo 'id ' . $id . ' was deleted successfully.';
        }
    }

    public function updateAction($request)
    {

        $data = json_decode(file_get_contents('php://input'), true);

        $name = $data["name"];
        $year = $data["year"];
        $desc = $data["desc"];
        $image = $data["image"];
        $id = $data["id"];

        $publisher = [
            'id' => $id,
            'year' => $year,
            'desc' => $desc,
            'name' => $name,
            'image' => $image,
        ];

        $sql = "UPDATE `movies`
        SET `name` = :name,
            `year` = :year,
            `desc` = :desc,
            `image` = :image
            WHERE `id` = :id ";
        $statement = $this->connectDb()->prepare($sql);

        $statement->bindParam(':id', $publisher['id']);
        $statement->bindParam(':year', $publisher['year']);
        $statement->bindParam(':name', $publisher['name']);
        $statement->bindParam(':desc', $publisher['desc']);
        $statement->bindParam(':image', $publisher['image']);

        // execute the UPDATE statment
        if ($statement->execute()) {
            echo 'The publisher has been updated successfully!';
        }
    }

    public function getOneMoive($request)
    {
        $id = $_GET['id'];

        $BFetch = $this->connectDb()->prepare("select * from movies where id = $id");
        $BFetch->execute();

        $J = [];
        $I = 0;

        while ($Fetch = $BFetch->fetch(PDO::FETCH_ASSOC)) {
            $J[$I] = [
                "id" => $Fetch['id'],
                "name" => $Fetch['name'],
                "year" => $Fetch['year'],
                "desc" => $Fetch['desc'],
                "image" => $Fetch['image'],
            ];
            $I++;
        }

        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        echo json_encode($J);
    }
}
