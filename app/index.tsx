import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { z } from 'zod/v4'

export default function Index() {
  const FormSchema = z.object({
    name: z.string().trim().min(1),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: { name: '' },
  })

  const handleSubmitPress = handleSubmit(data => {
    console.log('Form submitted with data:', data)
  })

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="First name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      {errors.name ? <Text>{errors.name.message}</Text> : null}

      <Button title="Submit" onPress={handleSubmitPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
})
