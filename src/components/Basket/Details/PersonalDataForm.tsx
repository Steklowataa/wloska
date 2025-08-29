"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { personSchema } from "@/utils/zosSchema";
import { Form, FormItem, FormLabel, FormControl, FormField, FormDescription, FormMessage } from "@/components/ui/form";
import Input from "./Input";

type FormValues = z.infer<typeof personSchema>;

export default function PersonalDataForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(personSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
    },
  });

  function onSubmit(values:z.infer<typeof personSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}
      className="grid gap-4">
       <FormField control={form.control} name="name" render={({field}) => (
        <FormItem>
            <FormLabel>Imie i nazwisko</FormLabel>
            <FormControl>
                <Input placeholder="Imie i nazwisko"{...field}/>
            </FormControl>
            <FormDescription>Prosze wpisz imie i nazwisko</FormDescription>
            <FormMessage/>
        </FormItem>
       )}></FormField>

        <FormField control={form.control} name="phone" render={({field}) => (
        <FormItem>
            <FormLabel>Numer telefonu</FormLabel>
            <FormControl>
                <Input placeholder="Numer telefonu"{...field}/>
            </FormControl>
            <FormDescription>Prosze wpisz swój numer telefonu</FormDescription>
            <FormMessage/>
        </FormItem>
       )}></FormField>
        <FormField control={form.control} name="email" render={({field}) => (
        <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
                <Input placeholder="Numer telefonu"{...field}/>
            </FormControl>
            <FormDescription>Prosze wpisz swój email</FormDescription>
            <FormMessage/>
        </FormItem>
       )}></FormField>
       <button >Submit</button>
      </form>
    </Form>
  );
}
