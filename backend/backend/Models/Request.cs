namespace backend.Models
{
    public class Request
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public bool IsUrgent { get; set; }
        public DateTime CreatedAt { get; set; }

    }
}
