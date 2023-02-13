// 서버 사이드(api)에서 실행

export function setRoutes(app, Model, pagingOptions = undefined) {
  app.get(async (req, res) => {
    try {
      let result = {};
      const filter = req.query;
      if (pagingOptions) {
        result = await Model.paginate(filter, pagingOptions);
      } else {
        result = await Model.find(filter);
      }

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  });
  app.post(async (req, res) => {
    try {
      const model = new Model(req.body);
      await model.save();
      return res.status(200).json(model);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  });
}

export function setRoutesById(app, Model) {
  app.get(async (req, res) => {
    try {
      const { _id } = req.query;
      const model = await Model.findById(_id);
      return res.status(200).json(model);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  });

  app.put(async (req, res) => {
    try {
      const { _id } = req.query;
      const model = await Model.findByIdAndUpdate(_id, req.body, { new: true });
      return res.status(200).json(model);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  });

  app.delete(async (req, res) => {
    try {
      const { _id } = req.query;
      const model = await Model.findByIdAndDelete(_id);
      return res.status(200).json(model);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  });
}
