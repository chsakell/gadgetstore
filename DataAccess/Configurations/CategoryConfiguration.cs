using Domain;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Configurations
{
    public class CategoryConfiguration : EntityTypeConfiguration<Category>
    {
        public CategoryConfiguration()
        {
            HasKey(c => c.CategoryID);

            Property(c => c.CategoryID).HasDatabaseGeneratedOption(DatabaseGeneratedOption.None);
        }
    }
}
